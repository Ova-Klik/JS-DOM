
const PRODUCT_URL = "https://fakestoreapi.com/products";
const productsContainer = document.querySelector(".products");

let allProducts = []; 

async function getAllProducts(url){
  try{
    const response = await fetch(url);
    const data = await response.json();
    allProducts = data;
    renderProducts(allProducts);
  } catch(error){
    console.log(error);
  }
}

 

function renderProducts(products){
   console.log(allProducts)
  productsContainer.innerHTML = ""; 
  products.forEach(product => {
    const {image, title, price, rating, availabilityStatus} = product;
    productsContainer.innerHTML += `
      <div class="firstProduct">
        <img src="${image}" alt="product_image">
        <h1>${title}</h1>
        <p>Price: $${price}</p>
        <p>rating: ${rating.rate}</p>
        <p>Stock left: ${rating.count}</p>
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