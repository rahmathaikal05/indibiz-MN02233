const data = [
  // BISNIS BASIC 1P
  { category: 'basic', nama: 'BISNIS BASIC 1P', kecepatan: 50, perbulan: 429570, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 1P', kecepatan: 75, perbulan: 496170, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 1P', kecepatan: 100, perbulan: 618270, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 1P', kecepatan: 150, perbulan: 773670, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 1P', kecepatan: 200, perbulan: 973470, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 1P', kecepatan: 300, perbulan: 1395270, pemasangan: 166500 },

  // BISNIS BASIC 2P
  { category: 'basic', nama: 'BISNIS BASIC 2P', kecepatan: 50, perbulan: 473970, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P', kecepatan: 75, perbulan: 540570, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P', kecepatan: 100, perbulan: 662670, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P', kecepatan: 150, perbulan: 818070, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P', kecepatan: 200, perbulan: 1017870, pemasangan: 166500 },

  // BISNIS BASIC 3P
  { category: 'basic', nama: 'BISNIS BASIC 3P', kecepatan: 50, perbulan: 679320, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P', kecepatan: 75, perbulan: 745920, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P', kecepatan: 100, perbulan: 868020, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P', kecepatan: 150, perbulan: 1023420, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P', kecepatan: 200, perbulan: 1223220, pemasangan: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P', kecepatan: 300, perbulan: 1645020, pemasangan: 166500 },

  // B2B
  { category: 'b2b', nama: 'HSI B2B', kecepatan: 50, perbulan: 487290, pemasangan: 166500 },
  { category: 'b2b', nama: 'HSI B2B', kecepatan: 75, perbulan: 576090, pemasangan: 166500 },
  { category: 'b2b', nama: 'HSI B2B', kecepatan: 100, perbulan: 742590, pemasangan: 166500 },
  { category: 'b2b', nama: 'HSI B2B', kecepatan: 150, perbulan: 909090, pemasangan: 166500 },
  { category: 'b2b', nama: 'HSI B2B', kecepatan: 200, perbulan: 1164390, pemasangan: 166500 },
  { category: 'b2b', nama: 'HSI B2B', kecepatan: 300, perbulan: 1663890, pemasangan: 166500 },
];

let currentCategory = 'basic';

function renderCards() {
  const container = document.getElementById('productContainer');
  const speed = document.getElementById('speedFilter').value;
  container.innerHTML = '';

  const filtered = data.filter(item => {
    return (item.category === currentCategory) && 
           (speed === 'all' || item.kecepatan == speed);
  });

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${item.nama}</h3>
      <p><strong>Kecepatan:</strong> ${item.kecepatan} Mbps</p>
      <p><strong>Harga Perbulan:</strong> Rp ${item.perbulan.toLocaleString('id-ID')}</p>
      <p><strong>Harga Pemasangan:</strong> Rp ${item.pemasangan.toLocaleString('id-ID')}</p>
    `;
    container.appendChild(card);
  });
}

function filterCategory(cat) {
  currentCategory = cat;
  renderCards();
}

document.getElementById('speedFilter').addEventListener('change', renderCards);

// Init
renderCards();

