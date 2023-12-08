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

//const cart = [];

//Functions:
//add to cart
//show cart
//remove from cart
//calculate price
//checkboxes for filter (eventlistener) (optinal)
//main page, all products
//  render filter in html (customer choice) (part of main page)
const card = document.getElementById("product-container");
renderAll();

function renderAll() {
  const allItems = products.map(
    (item) =>
      `<div><h3>${item.name}</h3> <p>${item.price}</p> <button id = btn${item.id}> Köp! </button></div> `
  );

  card.innerHTML = allItems.join("");
}
const categoryBTN = document.querySelector(".categoryButton");
categoryBTN.addEventListener("click", (e) => {
  console.log(e);
  filter(e.target.textContent.toLocaleLowerCase());
});

function filter(category) {
  const filteredItems = products.filter((e) => e.category == category);
  card.innerHTML = filteredItems.map(
    (item) =>
      `<div><h3>${item.name}</h3> <p>${item.price}</p> <button id = btn${item.id}> Köp! </button></div> `
  );
}
