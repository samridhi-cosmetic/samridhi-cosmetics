function filter(category) {
  let products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    if (category === "all" || products[i].classList.contains(category)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}

function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    let name = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    products[i].style.display = name.includes(input) ? "block" : "none";
  }
}
