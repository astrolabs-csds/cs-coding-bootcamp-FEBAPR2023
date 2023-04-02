// JS Exercise 3
// Do not edit line 3!
var cart = [
    ['Apple iPhone 14'          ,    4999],
    ['Apple iPhone charger'     ,    399],
    ['Apple Airpods'            ,    799],
    //['Samsung Earbuds'          ,    399]
]


// 1. console.log() the number of items in the cart
console.log( cart.length );


// 2. Remove the 'Samsung Earbuds' from the cart
cart.pop();
console.log(cart);


// 3. console.log() the price of the 'Apple iPhone 14'
console.log( cart[0][1] );


// 4. Add this new item to the cart
var newItem = ['USB Cable', 99];
cart.push( newItem );
console.log(cart);


// 5. Change the value of Apple Airpods 599
cart[2][1] = 599;
console.log(cart);



// 6 (Bonus). Using the for loop, go through each element
//            in the array and get the total for the cart



// The total should be 6096
var total = 0; 
