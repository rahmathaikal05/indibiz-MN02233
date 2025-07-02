const data = [
  // HSI BISNIS BASIC 1P INTERNET
  { category: 'basic', nama: 'HSI BISNIS BASIC 1P INTERNET', kecepatan: 50, harga: 387000, pasang: 166500 },
  { category: 'basic', nama: 'HSI BISNIS BASIC 1P INTERNET', kecepatan: 75, harga: 447000, pasang: 166500 },
  { category: 'basic', nama: 'HSI BISNIS BASIC 1P INTERNET', kecepatan: 100, harga: 557000, pasang: 166500 },
  { category: 'basic', nama: 'HSI BISNIS BASIC 1P INTERNET', kecepatan: 150, harga: 697000, pasang: 166500 },
  { category: 'basic', nama: 'HSI BISNIS BASIC 1P INTERNET', kecepatan: 200, harga: 877000, pasang: 166500 },
  { category: 'basic', nama: 'HSI BISNIS BASIC 1P INTERNET', kecepatan: 300, harga: 1257000, pasang: 166500 },

  // B2B
  { category: 'b2b', nama: 'HSI B2B (1:1)', kecepatan: 50, harga: 439000, pasang: 166500 },
  { category: 'b2b', nama: 'HSI B2B (1:1)', kecepatan: 75, harga: 519000, pasang: 166500 },
  { category: 'b2b', nama: 'HSI B2B (1:1)', kecepatan: 100, harga: 669000, pasang: 166500 },
  { category: 'b2b', nama: 'HSI B2B (1:1)', kecepatan: 150, harga: 819000, pasang: 166500 },
  { category: 'b2b', nama: 'HSI B2B (1:1)', kecepatan: 200, harga: 1049000, pasang: 166500 },
  { category: 'b2b', nama: 'HSI B2B (1:1)', kecepatan: 300, harga: 1499000, pasang: 166500 },

  // BISNIS BASIC 2P (INTERNET + TELEPON)
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TELEPON)', kecepatan: 50, harga: 427000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TELEPON)', kecepatan: 75, harga: 487000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TELEPON)', kecepatan: 100, harga: 597000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TELEPON)', kecepatan: 150, harga: 737000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TELEPON)', kecepatan: 200, harga: 917000, pasang: 166500 },

  // BISNIS BASIC 2P (INTERNET + TV)
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TV)', kecepatan: 50, harga: 587000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TV)', kecepatan: 75, harga: 647000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TV)', kecepatan: 100, harga: 757000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TV)', kecepatan: 150, harga: 897000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 2P (INTERNET + TV)', kecepatan: 200, harga: 1077000, pasang: 166500 },

  // BISNIS BASIC 3P (INTERNET + TELEPON + TV)
  { category: 'basic', nama: 'BISNIS BASIC 3P (INTERNET + TELEPON + TV)', kecepatan: 50, harga: 612000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P (INTERNET + TELEPON + TV)', kecepatan: 75, harga: 672000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P (INTERNET + TELEPON + TV)', kecepatan: 100, harga: 782000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P (INTERNET + TELEPON + TV)', kecepatan: 150, harga: 922000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P (INTERNET + TELEPON + TV)', kecepatan: 200, harga: 1102000, pasang: 166500 },
  { category: 'basic', nama: 'BISNIS BASIC 3P (INTERNET + TELEPON + TV)', kecepatan: 300, harga: 1482000, pasang: 166500 },
];

let currentCategory = 'basic';

document.getElementById('speedFilter').addEventListener('change', renderCards);

function filterCategory(cat) {
  currentCategory = cat;
  renderCards();
}

function renderCards() {
  const container = document.getElementById('productContainer');
  const selectedSpeed = document.getElementById('speedFilter').value;
  container.innerHTML = '';

  const filtered = data.filter(item =>
    item.category === currentCategory &&
    (selectedSpeed === 'all' || item.kecepatan == selectedSpeed)
  );

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${item.nama}</h3>
      <p><strong>Kecepatan:</strong> ${item.kecepatan} Mbps</p>
      <p><strong>Harga Paket:</strong> Rp ${item.harga.toLocaleString('id-ID')}</p>
      <p><strong>Harga Pemasangan:</strong> Rp ${item.pasang.toLocaleString('id-ID')}</p>
    `;
    container.appendChild(card);
  });
}

renderCards();