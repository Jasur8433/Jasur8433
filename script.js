const departments = ['agro', 'zoo', 'reg', 'edu', 'control', 'orders', 'hr', 'distance'];

const i18n = {
  ru: {
    brand: 'Портал анонимной оценки услуг', navHome: 'Главная', navAdmin: 'Админ панель',
    heroTitle: 'Нукусский филиал Государственного института искусств и культуры Узбекистана',
    heroSubtitle: 'Нажмите кнопку и оцените сервис анонимно.',
    openRate: 'Открыть оценку', comments: 'Оценок', rating: 'Рейтинг', dist: 'Распределение',
    rateTitle: 'Анонимная оценка', rateHint: 'Выберите оценку и нажмите «Отправить». ',
    submitVote: 'Отправить голос',
    selectMoodError: 'Сначала выберите оценку.',
    moodList: ['Очень хорошо', 'Хорошо', 'Средне', 'Плохо', 'Очень плохо'],
    moodIcons: ['😀', '🙂', '😐', '🙁', '😡'],
    anonNote: 'Анонимно. Голос учитывается в статистике.',
    voteOk: 'Спасибо! Ваша анонимная оценка принята.',
    voteTitle: 'Спасибо!',
    voteAccepted: 'Ваша оценка принята',
    voteBody: 'Голос сохранён и добавлен в статистику.',
    voteAlreadyTitle: 'Вы уже голосовали',
    voteAlreadyBody: 'Вы уже голосовали за этот факультет с этого устройства.',
    backHome: 'Вернуться на главную',
    adminLoginTitle: 'Вход администратора', lblUser: 'Логин', lblPass: 'Пароль', btnLogin: 'Войти', dashboardTitle: 'Статистика оценок', btnLogout: 'Выйти',
    thDepartment: 'Подразделение', thMood: 'Оценка', thDate: 'Дата', thAction: 'Действие', noData: 'Пока оценок нет', badAuth: 'Неверный логин или пароль',
    footer: '© 2026 Анонимная система оценки качества услуг',
    dept: { agro:'Факультет агротехнологий', zoo:'Факультет зооинженерии', reg:'Офис регистратора', edu:'Учебно-методический отдел', control:'Отдел внутреннего контроля', orders:'Отдел мониторинга поручений', hr:'Отдел кадров', distance:'Дистанционное обучение' }
  },
  uz: {
    brand: 'Xizmatni anonim baholash portali', navHome: 'Bosh sahifa', navAdmin: 'Admin panel',
    heroTitle: 'O‘zbekiston davlat san’at va madaniyat instituti Nukus filiali',
    heroSubtitle: 'Tugmani bosib xizmatni anonim baholang.',
    openRate: 'Baholashni ochish', comments: 'Baholar', rating: 'Reyting', dist: 'Taqsimot',
    rateTitle: 'Anonim baholash', rateHint: 'Bahoni tanlang va «Yuborish»ni bosing.',
    submitVote: 'Ovozni yuborish',
    selectMoodError: 'Avval bahoni tanlang.',
    moodList: ['Juda yaxshi', 'Yaxshi', 'O‘rtacha', 'Yomon', 'Juda yomon'],
    moodIcons: ['😀', '🙂', '😐', '🙁', '😡'],
    anonNote: 'Anonim. Ovoz statistikaga qo‘shiladi.',
    voteOk: 'Rahmat! Anonim baho qabul qilindi.',
    voteTitle: 'Raxmet!',
    voteAccepted: 'Siziń bahańız qabıllandı',
    voteBody: 'Ovoz saqlandi va statistikaga qo‘shildi.',
    voteAlreadyTitle: 'Siz búrın dáwıs berdińiz',
    voteAlreadyBody: 'Bu qurilmadan ushbu bo‘lim uchun qayta ovoz berib bo‘lmaydi.',
    backHome: 'Bas betke qaytıw',
    adminLoginTitle: 'Administrator kirishi', lblUser: 'Login', lblPass: 'Parol', btnLogin: 'Kirish', dashboardTitle: 'Baholar statistikasi', btnLogout: 'Chiqish',
    thDepartment: 'Bo‘lim', thMood: 'Baho', thDate: 'Sana', thAction: 'Amal', noData: 'Baholar yo‘q', badAuth: 'Login yoki parol noto‘g‘ri',
    footer: '© 2026 Xizmat sifatini anonim baholash tizimi',
    dept: { agro:'Agrotexnologiya fakulteti', zoo:'Zooinjeneriya fakulteti', reg:'Registrator ofisi', edu:'O‘quv-uslubiy bo‘lim', control:'Ichki nazorat bo‘limi', orders:'Topshiriqlar monitoring bo‘limi', hr:'Kadrlar bo‘limi', distance:'Masofaviy ta’lim' }
  },
  kk: {
    brand: 'Xızmetti anonim bahalaw portali', navHome: 'Bas bet', navAdmin: 'Admin panel',
    heroTitle: 'Ózbekstan mámleketlik kórkem óner hám mádeniyat institutı<br>Nókis filialı',
    heroSubtitle: 'Túymeni basıp xızmetti anonim bahalań.',
    openRate: 'Bahalawdı ashıw', comments: 'Bahalar', rating: 'Reyting', dist: 'Bólistiriw',
    rateTitle: 'Anonim bahalaw', rateHint: 'Bahanı tańlań hám «Jiberiw»di basıń.',
    submitVote: 'Dáwıstı jiberiw',
    selectMoodError: 'Aldın bahanı tańlań.',
    moodList: ['Óte jaqsı', 'Jaqsı', 'Ortaша', 'Jaman', 'Óte jaman'],
    moodIcons: ['😀', '🙂', '😐', '🙁', '😡'],
    anonNote: 'Anonim. Dáwıs statistikada esaplanadı.',
    voteOk: 'Raxmet! Anonim baha qabul etildi.',
    voteTitle: 'Raxmet!',
    voteAccepted: 'Siziń bahańız qabul etildi',
    voteBody: 'Dáwıs saqlandı hám statistikaǵa qosıldı.',
    voteAlreadyTitle: 'Siz búrın dáwıs berdińiz',
    voteAlreadyBody: 'Bul qurılmadan usı bólim ushın qayta dáwıs beriw múmkin emes.',
    backHome: 'Bas betke qaytıw',
    adminLoginTitle: 'Administrator kiriwi', lblUser: 'Login', lblPass: 'Parol', btnLogin: 'Kiriw', dashboardTitle: 'Bahalar statistikası', btnLogout: 'Shıǵıw',
    thDepartment: 'Bólim', thMood: 'Baha', thDate: 'Sáne', thAction: 'Ámel', noData: 'Bahalar joq', badAuth: 'Login yamasa parol qáte',
    footer: '© 2026 Xızmet sapasın anonim bahalaw sisteması',
    dept: { agro:'Agrotexnologiya fakulteti', zoo:'Zooinjeneriya fakulteti', reg:'Registrator ofis', edu:'Oqıw-metodika bólimi', control:'Ishki baqlaw bólimi', orders:'Tapсырmalar monitoring bólimi', hr:'Kadrlar bólimi', distance:'Aralıqtan oqıw' }
  }
};

const langs = [{ code: 'ru', label: 'RU' }, { code: 'uz', label: 'UZ' }, { code: 'kk', label: 'QQ' }];
let lang = localStorage.getItem('lang') || 'ru';
let isAdmin = sessionStorage.getItem('admin') === '1';
const votes = JSON.parse(localStorage.getItem('feedback') || '[]');

const el = (id) => document.getElementById(id);
const set = (id, txt) => { el(id).textContent = txt; };
const save = () => localStorage.setItem('feedback', JSON.stringify(votes));
const rateActions = el('rateActions');
const VOTE_FLAG_KEY = 'feedback_voted_departments';
function getVotedDepartments() {
  return JSON.parse(localStorage.getItem(VOTE_FLAG_KEY) || '[]');
}
function hasVoted(departmentId) {
  return getVotedDepartments().includes(departmentId);
}
function markVoted(departmentId) {
  const current = getVotedDepartments();
  if (!current.includes(departmentId)) {
    current.push(departmentId);
    localStorage.setItem(VOTE_FLAG_KEY, JSON.stringify(current));
  }
}

let selectedMood = null;
let currentDepartment = null;

function getDeptFromHash() {
  const hash = location.hash || '#home';
  const match = hash.match(/^#rate\/(.+)$/);
  return match ? match[1] : null;
}

function statsByDept(id) {
  const rows = votes.filter((v) => v.department === id);
  const count = rows.length;
  const sum = rows.reduce((acc, r) => acc + Number(r.mood), 0);
  const avg = count ? (6 - sum / count).toFixed(1) : '0.0';
  const dist = [1, 2, 3, 4, 5].map((m) => rows.filter((r) => Number(r.mood) === m).length);
  return { count, avg, dist };
}

function getRatingClass(avg) {
  if (avg >= 4) return 'rating-good';
  if (avg >= 2.5) return 'rating-medium';
  return 'rating-bad';
}

function renderCards() {
  const T = i18n[lang];
  cardsGrid.innerHTML = departments.map((id) => {
    const s = statsByDept(id);
    return `<article class="service-card">
      <div class="card-head">${T.dept[id]}</div>
      <div class="card-body">
        <a class="open-rate-btn" href="#rate/${id}">${T.openRate}</a>
        <div class="metrics">
          <div class="metric comments">💬 ${T.comments}<b>${s.count}</b></div>
          <div class="metric rating ${getRatingClass(Number(s.avg))}">⭐ ${T.rating}<b>${s.avg}</b></div>
        </div>
        <div class="dist"><div class="dist-title">${T.dist}</div>
          <div class="faces">
            <div class="face f1">😀<div>${s.dist[0]}</div></div>
            <div class="face f2">🙂<div>${s.dist[1]}</div></div>
            <div class="face f3">😐<div>${s.dist[2]}</div></div>
            <div class="face f4">🙁<div>${s.dist[3]}</div></div>
            <div class="face f5">😡<div>${s.dist[4]}</div></div>
          </div>
        </div>
      </div>
    </article>`;
  }).join('');
}

function showVoteStatusWindow(type) {
  const T = i18n[lang];
  const isAlready = type === 'already';
  voteStatusWindow.classList.remove('hidden');
  voteStatusWindow.innerHTML = `
    <div class="vote-status-head">
      <h3>${isAlready ? T.voteAlreadyTitle : T.voteTitle}</h3>
      <p>${isAlready ? T.voteAlreadyBody : T.voteAccepted}</p>
    </div>
    <div class="vote-status-body">
      <div class="check">✓</div>
      <p>${T.voteBody}</p>
    </div>
  `;
}

function renderRateView(id) {
  const T = i18n[lang];
  currentDepartment = id;
  selectedMood = null;

  set('rateDeptTitle', `${T.rateTitle}: ${T.dept[id]}`);
  set('rateSubtitle', T.rateHint);
  set('anonNote', T.anonNote);
  set('submitVoteBtn', T.submitVote);
  set('backToHomeBtn', T.backHome);
  rateResult.textContent = '';
  rateError.textContent = '';
  voteStatusWindow.classList.add('hidden');
  voteStatusWindow.innerHTML = '';

  if (hasVoted(id)) {
    moodButtons.innerHTML = '';
    rateActions.classList.add('hidden');
    showVoteStatusWindow('already');
    return;
  }

  rateActions.classList.remove('hidden');

  moodButtons.innerHTML = T.moodList.map((name, index) => {
    const mood = index + 1;
    return `<button class="mood-item m${mood}" data-mood="${mood}" type="button">
      <span class="emoji">${T.moodIcons[index]}</span>
      <span>${name}</span>
    </button>`;
  }).join('');

  moodButtons.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedMood = Number(btn.dataset.mood);
      rateError.textContent = '';
      moodButtons.querySelectorAll('button').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  submitVoteBtn.onclick = () => {
    if (hasVoted(id)) {
      moodButtons.innerHTML = '';
      rateActions.classList.add('hidden');
      showVoteStatusWindow('already');
      return;
    }
    if (!selectedMood) {
      rateError.textContent = T.selectMoodError;
      return;
    }
    votes.push({ department: id, mood: selectedMood, date: new Date().toISOString() });
    markVoted(id);
    save();
    moodButtons.innerHTML = '';
    rateActions.classList.add('hidden');
    showVoteStatusWindow('ok');
    renderCards();
    if (isAdmin) {
      renderAdminStats();
      renderAdminTable();
    }
  };
}

function renderAdminStats() {
  const total = votes.length;
  const good = votes.filter((v) => Number(v.mood) <= 2).length;
  const neutral = votes.filter((v) => Number(v.mood) === 3).length;
  const bad = votes.filter((v) => Number(v.mood) >= 4).length;
  adminStats.innerHTML = `
    <div class="a-stat"><small>All</small><b>${total}</b></div>
    <div class="a-stat"><small>Good</small><b>${good}</b></div>
    <div class="a-stat"><small>Neutral</small><b>${neutral}</b></div>
    <div class="a-stat"><small>Bad</small><b>${bad}</b></div>`;
}

function renderAdminTable() {
  const T = i18n[lang];
  if (!votes.length) {
    feedbackRows.innerHTML = `<tr><td colspan="5">${T.noData}</td></tr>`;
    return;
  }
  feedbackRows.innerHTML = votes.map((v, i) => `<tr>
    <td>${i + 1}</td>
    <td>${T.dept[v.department]}</td>
    <td>${T.moodList[Number(v.mood) - 1]}</td>
    <td>${new Date(v.date).toLocaleString()}</td>
    <td><button class="btn ghost" onclick="removeRow(${i})">×</button></td>
  </tr>`).join('');
}

window.removeRow = (i) => {
  votes.splice(i, 1);
  save();
  renderCards();
  renderAdminStats();
  renderAdminTable();
};

function applyTexts() {
  const T = i18n[lang];
  set('brand', T.brand);
  heroTitle.innerHTML = T.heroTitle;
  set('heroSubtitle', T.heroSubtitle);
  set('adminLoginTitle', T.adminLoginTitle); set('lblUser', T.lblUser); set('lblPass', T.lblPass);
  set('btnLogin', T.btnLogin); set('dashboardTitle', T.dashboardTitle); set('btnLogout', T.btnLogout);
  set('thDepartment', T.thDepartment); set('thMood', T.thMood); set('thDate', T.thDate); set('thAction', T.thAction);
  set('footerText', T.footer);
  renderCards();
}

function route() {
  const hash = location.hash || '#home';
  const deptId = getDeptFromHash();
  homeView.classList.toggle('hidden', hash !== '#home');
  rateView.classList.toggle('hidden', !deptId);
  adminView.classList.toggle('hidden', hash !== '#admin');

  if (deptId) {
    rateResult.textContent = '';
    renderRateView(deptId);
  }

  loginBox.classList.toggle('hidden', isAdmin);
  dashboard.classList.toggle('hidden', !isAdmin);
  if (hash === '#admin' && isAdmin) {
    renderAdminStats();
    renderAdminTable();
  }
}

function renderLangButtons() {
  langButtons.innerHTML = langs.map((l) => `<button type="button" class="lang-btn ${l.code === lang ? 'active' : ''}" data-lang="${l.code}">${l.label}</button>`).join('');
  langButtons.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      localStorage.setItem('lang', lang);
      renderLangButtons();
      applyTexts();
      route();
    });
  });
}

loginForm.onsubmit = (e) => {
  e.preventDefault();
  const fd = new FormData(loginForm);
  if (fd.get('username') === 'admin' && fd.get('password') === 'admin123') {
    isAdmin = true;
    sessionStorage.setItem('admin', '1');
    route();
  } else {
    alert(i18n[lang].badAuth);
  }
};

btnLogout.onclick = () => { isAdmin = false; sessionStorage.removeItem('admin'); route(); };
window.addEventListener('hashchange', route);

renderLangButtons();
applyTexts();
route();
