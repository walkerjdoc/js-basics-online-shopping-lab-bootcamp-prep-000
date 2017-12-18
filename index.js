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
  if (cart.lenth = 0){
    return "Your shopping cart is empty."
  }
  else{
    
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
