// Minimal JS for the demo UI. No external dependencies.
// - Toggle mobile nav (simple)
// - Populate item.html from query param

const toggle = (btnId, navSelector) => {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  });
};
toggle('menuToggle');
toggle('menuToggle2');
toggle('menuToggle3');
toggle('menuToggle4');

// Sample item data used by item.html
const SAMPLE_ITEMS = {
  1: { id:1, name:'Widget Alpha', stock:120, price:'$9.99', desc:'Reliable general-purpose widget.' },
  2: { id:2, name:'Gadget Beta', stock:58, price:'$19.50', desc:'Advanced gadget with extended warranty.' },
  3: { id:3, name:'Tool Gamma', stock:0, price:'$5.75', desc:'Compact tool. Out of stock currently.' }
};

function populateItemPage() {
  if (!document.getElementById('itemId')) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id') || '1';
  const item = SAMPLE_ITEMS[id] || { id:'?', name:'Unknown', stock:'—', price:'—', desc:'No data' };
  document.getElementById('itemId').textContent = item.id;
  document.getElementById('itemName').textContent = item.name;
  document.getElementById('itemStock').textContent = item.stock;
  document.getElementById('itemPrice').textContent = item.price;
  document.getElementById('itemDesc').textContent = item.desc;

  const reserveBtn = document.getElementById('reserveBtn');
  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      if (item.stock > 0) {
        alert('Reserved 1 unit of ' + item.name + '. (Demo only)');
      } else {
        alert('Item out of stock.');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', populateItemPage);
export {}; // keep module scope safe
