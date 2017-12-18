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
  if (cart.length = 0){
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length = 1) {
    console.log(`In your cart, you have ${item} at ${price}.`)
  }{
    return "come back to me"
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
