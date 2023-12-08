/* 
Ni väljer om ni använder produktdatan i js eller json och om ni vill lägga till 
fler properties som bilder etc.

Ni får också använda ett api som t.ex. https://fakestoreapi.com/ för att generara
ut fiktiva produkter därifrån istället för från en lokal js/json.
*/

const products = [
  { id: 1, name: "T-shirt", category: "kläder", price: 100 },
  { id: 2, name: "Hörlurar", category: "elektronik", price: 250 },
  { id: 3, name: "Keps", category: "kläder", price: 50 },
  { id: 4, name: "Mobiltelefon", category: "elektronik", price: 500 },
];

const cart = [];

//Functions:
//add to cart
//show cart
//remove from cart
//calculate price
//checkboxes for filter (eventlistener) (optinal)
//main page, all products
//  render filter in html (customer choice) (part of main page)

renderAll();

function renderAll() {
  const card = document.getElementById("product-container");

  const allItems = products.map(
    (item) =>
      `<div class = "gridItemContainer"><h3>${item.name}</h3> <div class = "itemPurchaseInfo"><p>${item.price}</p> <button class = "buyButton" id = ${item.id}> Köp! </button></div></div> `
  );

  card.innerHTML = allItems.join("");
  console.log(allItems);
}
