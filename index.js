var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartObject = {[item]: Math.floor(((Math.random()*100)+1))}
  cart.push(cartObject)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var allItemsAndPrices = [];
  var allExceptLastItem = [];
  var finalItem = [];
for(let i=0; i < cart.length; i++){
  var item = Object.keys(cart[i])[0]
  var price = cart[i][item]
}
  if (0 = cart.length){
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length=1){
    console.log(`In your cart, you have ${cart.slice(0)} at ${cart.slice(1)}.`)
  }
  else if (cart.length >1){
    
  }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
