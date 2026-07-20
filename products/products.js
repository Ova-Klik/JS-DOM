const PRODUCT_URL = "https://dummyjson.com/products";
const productsContainer = document.querySelector(".products");

let allProducts = []; 

async function getAllProducts(url){
  try{
    const response = await fetch(url);
    const data = await response.json();
    allProducts = data.products;
    renderProducts(allProducts);
  } catch(error){
    console.log(error);
  }
}

function renderProducts(products){
  productsContainer.innerHTML = ""; 
  products.forEach(product => {
    const {images, title, price, rating, availabilityStatus} = product;
    productsContainer.innerHTML += `
      <div class="firstProduct">
        <img src="${images[0]}" alt="product_image">
        <h1>${title}</h1>
        <p>Price: $${price}</p>
        <p>rating: ${rating}</p>
        <p>Availability: ${availabilityStatus}</p>
      </div>
    `;
  });
}

const search = document.querySelector("#search input");
search.addEventListener("keyup", () => {
  const searchTerm = search.value.trim().toLowerCase();
  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
});

getAllProducts(PRODUCT_URL);