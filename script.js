// Данные объектов культурного наследия
const heritageSites = [
  {
    name: 'Регистан (Самарканд)',
    coords: [39.6542, 66.9750],
    description: 'Архитектурный ансамбль XV–XVII веков, символ Самарканда и всей Центральной Азии.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Registan_Square%2C_Samarkand.jpg'
  },
  {
    name: 'Ичан-Кала (Хива)',
    coords: [41.3783, 60.3639],
    description: 'Древний внутренний город Хивы с крепостными стенами и десятками исторических памятников.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Khiva_Itchan_Kala.jpg'
  },
  {
    name: 'Минарет Калян (Бухара)',
    coords: [39.7747, 64.4286],
    description: 'Знаменитый минарет XII века, один из главных архитектурных символов Бухары.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Kalyan_minaret_Bukhara.jpg'
  },
  {
    name: 'Аяз-Кала (Каракалпакстан)',
    coords: [42.0136, 61.0267],
    description: 'Комплекс древних крепостей в пустынной зоне, отражающий военную архитектуру Хорезма.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Ayaz-Kala_2.jpg'
  }
];

// Инициализация карты Leaflet + OpenStreetMap
const map = L.map('map').setView([41.2, 63.5], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markers = [];
heritageSites.forEach(site => {
  const marker = L.marker(site.coords).addTo(map);
  marker.bindPopup(`
    <div style="max-width:220px">
      <h4 style="margin:0 0 6px">${site.name}</h4>
      <img src="${site.image}" alt="${site.name}" style="width:100%;height:110px;object-fit:cover;border-radius:8px;margin-bottom:6px" />
      <p style="margin:0 0 8px;font-size:13px">${site.description}</p>
      <button style="background:#2563eb;color:#fff;border:none;padding:6px 10px;border-radius:8px;cursor:pointer">Подробнее</button>
    </div>
  `);
  markers.push({ marker, site });
});

// Рендер карточек объектов
const cardsContainer = document.getElementById('cardsContainer');
function renderCards(list) {
  cardsContainer.innerHTML = list.map(site => `
    <article class="card glass">
      <img src="${site.image}" alt="${site.name}" />
      <div class="card-body">
        <h3>${site.name}</h3>
        <p>${site.description}</p>
        <button class="btn btn-sm" type="button">Подробнее</button>
      </div>
    </article>
  `).join('');
}
renderCards(heritageSites);

// Поиск по объектам
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = heritageSites.filter(site => site.name.toLowerCase().includes(q));
  renderCards(filtered);

  if (q === '') {
    map.setView([41.2, 63.5], 6);
    return;
  }

  const firstMatch = markers.find(item => item.site.name.toLowerCase().includes(q));
  if (firstMatch) {
    map.setView(firstMatch.site.coords, 9);
    firstMatch.marker.openPopup();
  }
});

// Анимация появления секций при прокрутке
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
