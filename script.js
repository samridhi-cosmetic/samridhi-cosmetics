// ===== Product Array with Variants & Featured Flag =====
const products = [
  {
    name: "Blue Heaven Lipstick",
    category: "lipstick",
    price: 499,
    featured: true,
    variants: [
      {shade: "Red", img: "images/BlueHeavenRed.jpeg"},
      {shade: "Pink", img: "images/BlueHeavenHazelnut.jpeg"},
      {shade: "Nude", img: "images/lakme-lipstick-nude.jpg"}
    ]
  },
  {
    name: "Elle 18 Nail Paint",
    category: "nailpaint",
    price: 199,
    featured: false,
    variants: [
      {shade: "Red", img: "images/Elle18Red.jpeg"}
    ]
  },
  {
    name: "Blue Heaven Mascara",
    category: "mascara",
    price: 499,
    featured: false,
    variants: [
      {shade: "Black", img: "images/blueHeavenMascara.jpg"}
    ]
  }
];

// ===== Generate Products =====
const productList = document.getElementById('productList');
const featuredList = document.getElementById('featuredList');

function displayProducts(list) {
  productList.innerHTML = ''; 
  list.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product', product.category);

    let variantSelect = '';
    if(product.variants.length > 1){
      variantSelect = '<select class="shade-select" onchange="updateVariant(this)">';
      product.variants.forEach(v => {
        variantSelect += `<option value="${v.shade}" data-img="${v.img}">${v.shade}</option>`;
      });
      variantSelect += '</select>';
    }

    div.innerHTML = `
      <img src="${product.variants[0].img}" alt="${product.name}" loading="lazy" onerror="this.src='images/default-placeholder.jpg'">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      ${variantSelect}
    `;
    productList.appendChild(div);
  });
}

// ===== Display Featured Products =====
function displayFeatured() {
  featuredList.innerHTML = '';
  products.filter(p => p.featured).forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product', product.category, 'featured');

    let variantSelect = '';
    if(product.variants.length > 1){
      variantSelect = '<select class="shade-select" onchange="updateVariant(this)">';
      product.variants.forEach(v => {
        variantSelect += `<option value="${v.shade}" data-img="${v.img}">${v.shade}</option>`;
      });
      variantSelect += '</select>';
    }

    div.innerHTML = `
      <img src="${product.variants[0].img}" alt="${product.name}" loading="lazy" onerror="this.src='images/default-placeholder.jpg'">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      ${variantSelect}
    `;
    featuredList.appendChild(div);
  });
}

// ===== Initial Display =====
displayFeatured();
displayProducts(products);

// ===== Update Variant Function =====
function updateVariant(selectElement){
  const img = selectElement.parentElement.querySelector('img');
  img.src = selectElement.selectedOptions[0].dataset.img;
}

// ===== Filter by Category =====
function filter(category) {
  if(category === 'all'){
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.category === category));
  }
}

// ===== Search Products =====
function searchProducts() {
  const query = document.getElementById('search').value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
}
