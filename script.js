let allSystems = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch('assets/systems.json')
    .then(response => response.json())
    .then(data => {
      allSystems = data;
      renderSystems(data);
    });
});

function renderSystems(systems) {
  const container = document.getElementById('systemsList');
  container.innerHTML = '';

  if (systems.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #777;">نتیجه‌ای یافت نشد.</p>';
    return;
  }

  systems.forEach(system => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3>${system.name}</h3>
      <button onclick="window.open('${system.link}', '_blank')">ورود به سامانه</button>
    `;

    container.appendChild(card);
  });
}

function filterSystems() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = allSystems.filter(s => s.name.toLowerCase().includes(query));
  renderSystems(filtered);
}

function showAboutDialog() {
  document.getElementById('aboutDialog').classList.remove('hidden');
}

function closeAboutDialog() {
  document.getElementById('aboutDialog').classList.add('hidden');
}
