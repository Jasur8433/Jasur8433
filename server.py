#!/usr/bin/env python3
import json
import sqlite3
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse

DB_PATH = Path(__file__).with_name('feedback.db')


def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        '''
        CREATE TABLE IF NOT EXISTS votes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            department TEXT NOT NULL,
            mood INTEGER NOT NULL CHECK(mood >= 1 AND mood <= 5),
            date TEXT NOT NULL
        )
        '''
    )
    conn.commit()
    conn.close()


class Handler(SimpleHTTPRequestHandler):
    def _json(self, payload, status=200):
        body = json.dumps(payload).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _empty(self, status=204):
        self.send_response(status)
        self.end_headers()

    def _read_json(self):
        length = int(self.headers.get('Content-Length', '0'))
        raw = self.rfile.read(length) if length else b'{}'
        return json.loads(raw.decode('utf-8'))

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/votes':
            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            rows = conn.execute('SELECT id, department, mood, date FROM votes ORDER BY id DESC').fetchall()
            conn.close()
            self._json({'votes': [dict(r) for r in rows]})
            return
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/votes':
            try:
                data = self._read_json()
                department = str(data.get('department', '')).strip()
                mood = int(data.get('mood'))
                if not department or mood < 1 or mood > 5:
                    raise ValueError('Invalid vote payload')
            except Exception:
                self._json({'error': 'invalid payload'}, status=400)
                return

            conn = sqlite3.connect(DB_PATH)
            cur = conn.execute(
                'INSERT INTO votes (department, mood, date) VALUES (?, ?, datetime(\'now\'))',
                (department, mood),
            )
            conn.commit()
            vote_id = cur.lastrowid
            conn.close()
            self._json({'ok': True, 'id': vote_id}, status=201)
            return
        self._json({'error': 'not found'}, status=404)

    def do_DELETE(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/votes':
            conn = sqlite3.connect(DB_PATH)
            conn.execute('DELETE FROM votes')
            conn.commit()
            conn.close()
            self._empty(204)
            return

        if parsed.path.startswith('/api/votes/'):
            vote_id = parsed.path.split('/')[-1]
            if not vote_id.isdigit():
                self._json({'error': 'invalid id'}, status=400)
                return
            conn = sqlite3.connect(DB_PATH)
            conn.execute('DELETE FROM votes WHERE id = ?', (int(vote_id),))
            conn.commit()
            conn.close()
            self._empty(204)
            return

        self._json({'error': 'not found'}, status=404)


def main():
    init_db()
    server = ThreadingHTTPServer(('0.0.0.0', 3000), Handler)
    print('Serving on http://0.0.0.0:3000')
    server.serve_forever()


if __name__ == '__main__':
    main()
