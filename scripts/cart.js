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
        `<div><h3>${item.name}</h3> <p>${item.price}</p> <button id = remove-btn${item.id}> Ta bort! </button></div> `
    );
  
    cartContainer.innerHTML = cartItems.join("");
    console.log(cartItems);
}

cartContainer.addEventListener('click', removeFromCart);

//* remove from cart
// function removeFromCart(event){
//     const {target} = event;

//     if(target.tagName === "BUTTON"){
//         switch(target.id){
//             case 'remove-btn1':
//                 console.log("remove 1");
//                 const removeIndex = cart.findIndex(findItem);

//                 function findItem(item){
//                     return 
//                 }
                /* const numbers21 = [1, 2, 3, 4, 5];

                const result21 = numbers21.findIndex(findThree);

                function findThree(value) {
                    return value === 3;
                }
            
                console.log(removeIndex);
                // cart.splice()
                break;
            case 'remove-btn2':
                console.log("remove 2");
                // cart.splice()
                break;
            case 'remove-btn3':
                console.log("remove 3");
                // cart.splice()
                break;
            case 'remove-btn4':
                console.log("remove 4");
                // cart.splice()
                break;
        }
    }

    
  
}
//eventlistener på remove-knapparna

//funktion för att ta bort vald produkt
// uppdatera cart med cart.splice(product)
