const cart = {
  "peach": 25,
  "watermelon": 15,
  "pear": 18
}

console.log(cart);
console.log(`Груша: ${cart.pear}`);
console.log(`Персик: ${cart["peach"]}`);

cart["apple"] = 20;

console.log(cart);

delete cart["watermelon"];

console.log(cart);

cart["pear"] = 20;

console.log('==================')