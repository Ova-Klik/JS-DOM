const PRODUCT_URL ="https://dummyjson.com/products/dom";

// function getAllProducts(url){
//     fetch(url)
//     .then((response)=>response.json())
//     .then((data)=>{console.log(data)})
//     .catch((error)=>{console.log("error")});
// };

async function getAllProducts(url){
    try{
        const response = await fetch (url);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

getAllProducts(PRODUCT_URL)
