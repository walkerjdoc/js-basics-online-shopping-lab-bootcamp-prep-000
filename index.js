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
  allItemsAndPrices.push(` ${item} at $${price}`)
}
  if (cart.length == 0){
    console.log(`Your shopping cart is empty.`)
  }
  else if (cart.length == 1){
    console.log(`In your cart, you have${allItemsAndPrices}.`)
  }
  else if (cart.length == 2){
    console.log(`In your cart, you have${allItemsAndPrices[0]} and${allItemsAndPrices[1]}.`)
  }
  else {
    for(let i = 0; i < (cart.length -1); i++){
      allExceptLastItem.push(allItemsAndPrices[i])
    }
    finalItem.push(` and${allItemsAndPrices[cart.length - 1]}`)
    console.log (`In your cart, you have${allExceptLastItem},${finalItem}.`)
  }
}

function total() {
  var cumulativeTotal = 0
  for(let i=0; i < cart.length; i++){
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
  cumulativeTotal = cumulativeTotal + price;
  }
  return cumulativeTotal
  console.log(cumulativeTotal)
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (cardNumber !== null){
    console.log(`Your total cost is$ ${total(cart)}, which will be charged to the card ${cardNumber}.`)
}
  else{
    console.log(`We don't have a credit card on file for you.`)
  }
}
