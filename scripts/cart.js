const cart = [];

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

//* Add to cart
//eventlistener på köp-knapparna
btn1.addEventListener("click", addToCart);
btn2.addEventListener("click", addToCart);
btn3.addEventListener("click", addToCart);
btn4.addEventListener("click", addToCart);

//funktion när man trycker på köp
function addToCart(event) {
  const { target } = event;

  switch (target.id) {
    case "btn1":
      cart.push(products[0]);
      break;
    case "btn2":
      cart.push(products[1]);
      break;
    case "btn3":
      cart.push(products[2]);
      break;
    case "btn4":
      cart.push(products[3]);
      break;
  }
  //displayCart();

  console.log(cart);
}

//* display cart
//använd map på cart. cart.map()
// function displayCart(){
//     let cartItems = cart.map((product) => {
//         return `
//         <div class="product">
//             <h3>${product.name}</h3>
//             <p>Price: ${product.price}</p>
//             <p>Description: ${product.description}</p>
//         </div>
//         `
//     });
// }
//* remove from cart
//eventlistener på remove-knapparna

//funktion för att ta bort vald produkt
// uppdatera cart med cart.splice(product)
