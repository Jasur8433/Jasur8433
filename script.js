// Цифровой каталог объектов наследия (MVP-данные)
const heritageSites = [
  {
    id: 'registan',
    name: 'Регистан',
    city: 'Самарканд',
    region: 'Самарканд',
    coords: [39.6542, 66.9750],
    buildDate: 'XV–XVII вв.',
    state: 'Хорошее, объект под охраной UNESCO',
    description: 'Ансамбль медресе и главная площадь исторического Самарканда.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Registan_Square%2C_Samarkand.jpg'
  },
  {
    id: 'ichan-kala',
    name: 'Ичан-Кала',
    city: 'Хива',
    region: 'Хива',
    coords: [41.3783, 60.3639],
    buildDate: 'X–XIX вв.',
    state: 'Сохранённый исторический комплекс',
    description: 'Внутренний город-крепость с уникальной архитектурой Хорезма.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Khiva_Itchan_Kala.jpg'
  },
  {
    id: 'kalyan',
    name: 'Минарет Калян',
    city: 'Бухара',
    region: 'Бухара',
    coords: [39.7747, 64.4286],
    buildDate: '1127 год',
    state: 'Стабильное состояние после реставрации',
    description: 'Один из старейших минаретов Центральной Азии и символ Бухары.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Kalyan_minaret_Bukhara.jpg'
  },
  {
    id: 'ayaz-kala',
    name: 'Аяз-Кала',
    city: 'Каракалпакстан',
    region: 'Каракалпакстан',
    coords: [42.0136, 61.0267],
    buildDate: 'IV век до н.э. – VII век н.э.',
    state: 'Частично сохранившиеся руины',
    description: 'Комплекс древних крепостей в пустынной местности северного Узбекистана.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Ayaz-Kala_2.jpg'
  }
];

// Инициализация карты
const map = L.map('map').setView([41.2, 63.5], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markers = [];
heritageSites.forEach(site => {
  const marker = L.marker(site.coords).addTo(map);
  marker.bindPopup(`
    <div style="max-width:240px">
      <h4 style="margin:0 0 6px">${site.name} (${site.city})</h4>
      <img src="${site.image}" alt="${site.name}" style="width:100%;height:110px;object-fit:cover;border-radius:8px;margin-bottom:6px" />
      <p style="margin:0 0 6px;font-size:13px">${site.description}</p>
      <small><b>Дата постройки:</b> ${site.buildDate}</small><br/>
      <small><b>Состояние:</b> ${site.state}</small><br/>
      <button style="margin-top:6px;background:#2563eb;color:#fff;border:none;padding:6px 10px;border-radius:8px;cursor:pointer">Подробнее</button>
    </div>
  `);
  markers.push({ marker, site });
});

const cardsContainer = document.getElementById('cardsContainer');
const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');

// Генерация карточек объектов
function renderCards(list) {
  cardsContainer.innerHTML = list.map(site => `
    <article class="card glass">
      <img src="${site.image}" alt="${site.name}" />
      <div class="card-body">
        <span class="chip">${site.region}</span>
        <h3>${site.name} (${site.city})</h3>
        <p>${site.description}</p>
        <div class="meta">
          <span><b>Дата постройки:</b> ${site.buildDate}</span>
          <span><b>Состояние:</b> ${site.state}</span>
        </div>
        <div class="actions">
          <button class="btn btn-sm" type="button">3D-модель</button>
          <button class="btn btn-sm" type="button">Видео</button>
          <button class="btn btn-sm" type="button">VR-тур</button>
          <button class="btn btn-sm" type="button">Аудиогид</button>
        </div>
      </div>
    </article>
  `).join('');
}

function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const region = regionFilter.value;

  const filtered = heritageSites.filter(site => {
    const bySearch = `${site.name} ${site.city}`.toLowerCase().includes(q);
    const byRegion = region === 'all' || site.region === region;
    return bySearch && byRegion;
  });

  renderCards(filtered);

  if (filtered.length) {
    map.setView(filtered[0].coords, filtered.length === 1 ? 9 : 6);
    const markerObj = markers.find(item => item.site.id === filtered[0].id);
    markerObj?.marker.openPopup();
  }
}

searchInput.addEventListener('input', applyFilters);
regionFilter.addEventListener('change', applyFilters);
renderCards(heritageSites);

// Анимация появления секций
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
