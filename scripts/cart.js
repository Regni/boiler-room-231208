const cart = [];

const cartContainer = document.getElementById("cart");

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

    switch(target.id){
        case 'btn1':
            cart.push(products[0]);
            break;
        case 'btn2':
            cart.push(products[1]);
            break;
        case 'btn3':
            cart.push(products[2]);
            break;
        case 'btn4':
            cart.push(products[3]);
            break;
    }
    console.log(cart);
    displayCart();
}

//* display cart
function displayCart() { 
    const cartItems = cart.map(
      (item) =>
        `<div><h3>${item.name}</h3> <p>${item.price}</p> <button id= remove-btn${item.id}> Ta bort! </button></div> `
    );
  
    cartContainer.innerHTML = cartItems.join("");
    console.log(cartItems);
}

cartContainer.addEventListener('click', removeFromCart);

//* remove from cart
function removeFromCart(event){
    const {target} = event;

    if(target.tagName === "BUTTON"){
        console.log(cart.indexOf(target.id));
        switch(target.id){
            case 'remove-btn1':
                cart.splice(0, 1);
                break;
            case 'remove-btn2':
                cart.splice(1, 1);
                break;
            case 'remove-btn3':
                cart.splice(2, 1);
                break;
            case 'remove-btn4':
                cart.splice(3, 1);
                break;
        }
        console.log(cart);
        displayCart();
    }

    
  
}
//eventlistener på remove-knapparna

//funktion för att ta bort vald produkt
// uppdatera cart med cart.splice(product)
