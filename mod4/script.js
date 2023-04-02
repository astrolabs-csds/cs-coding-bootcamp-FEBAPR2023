// ------------------------------------------------------------------------------------
// 1. Built-in Functions
//    Some basic examples of JavaScript

// alert("Good morning!");
// prompt("What is your name?");

// alert("Line 1" + "\n" + "Line 2");






// ------------------------------------------------------------------------------------
// 2. Variable
// var userName = prompt("What is your name?"); // Dany
// alert("Your name is " + userName);






// ------------------------------------------------------------------------------------
// 3. Operators

// =                Assignment
// +                Add (or concatenate)
// -                Subtract
// *                Multiply
// \                Divide
// ==               Comparison
// +=               Increment by n
// -=               Decrement by n
// ===              Strict comparison
// ||               OR
// &&               AND
// !                NOT
// !=               NOT equal
// !==              Strictly NOT equal
// %                Modulo
// ++               Increment by 1
// --               Decrement by 1
// ?                Inline condition
// >                Greater than
// <                Less than
// >=               Greater than or equal
// <=               Less than or equal


// Add
// alert(5 + 6);

// Concatenate
// alert("5" + "6");






// ------------------------------------------------------------------------------------
// 4.1 Control Statements: if/else


// var price = 500;
// var budget = 500;

// if ( price <= budget ) {
//     alert("Buy the product");
// } 
// else {
//     alert("Don't buy the product");
// };




// iPhone 14, S23, OnePlus 11
// 5000, 4000, 3500

// var userSelection = prompt("Enter product name");

// if(userSelection == 'iPhone 14') {
//     alert(5000);
// }
// else if(userSelection == 'S23') {
//     alert(4000);
// }
// else if(userSelection == 'OnePlus 11') {
//     alert(3500);
// }
// else {
//     alert("Not available in stock.")
// }




// ------------------------------------------------------------------------------------
// 4.2 Control Statements: while


// var counter = 1;

// while(counter < 6) {
//     alert(counter);
//     counter++;
// }



// ------------------------------------------------------------------------------------
// 4.3 Control Statements: for


// 1. counter
// 2. comparison
// 3. increment

// for(var counter = 1; counter <= 5; counter++) {

    
// }






// ------------------------------------------------------------------------------------
// 5.1 Data Structures: Array

// var cart = [
//     'iPhone 14',        // 0
//     'Adapter',          // 1
//     'Case',             // 2 
//     'Bananas',          // 3 
//     'Airpods'           // 4
// ];

// var prices = [
//     5000, 
//     450, 
//     100, 
//     8, 
//     400
// ];

// var total = 0;


// for(var i = 0; i < prices.length; i++) {
//     total = total + prices[i];
// }


// console.log(total);



// Array Methods:
// .push()                  Adds element to end
// .unshift                 Adds element to start
// .pop()                   Removes element from end
// .shift()                 Removes element from start
// .splice()                Adds element to or removes element from specific position

// var cities = [
//     'London',
//     'Dubai',
//     'Madrid',
//     'Barcelona'
// ];




// var queue = [
//     'Soheil',
//     'Moncy',
//     'Chadi',
//     'Raneem',
// ];

// // Add to start
// queue.unshift('Moncy');
// queue.unshift('Soheil');
// console.log(queue);

// // Add to end
// queue.push('Dany');
// console.log(queue);

// // Remove from end
// queue.pop();
// console.log(queue);

// // Remove from start
// queue.shift();
// console.log(queue);




var cart = [
    ['Apple iPhone 14'          ,    4999],
    ['Apple iPhone charger'     ,    399],
    ['Apple Airpods'            ,    799],
]

// console.log(  cart[0] )             // [ 'Apple iPhone 14' , 4999 ]
// console.log(  cart[0][1] )          // 4999



// console.log( cart[2] )              // ['Apple Airpods' , 799]
// console.log( cart[2][0] )           // 'Apple Airpods'



// var newItem = ['iPhone 14 Case', 29];

// cart.push( newItem )







// ------------------------------------------------------------------------------------
// 5.2 Data Structures: Object

// var users = {
//     "u01": {
//         "firstName": "Kim",
//         "lastName": "Kardashian",
//         "occupation": "Influencer",
//         "followers": 10000000,
//         "links": ['shop','youtube','twitter'],
//         "interests": {
//             "sports": "golf",
//             "hobby": "fishing",
//             "social": "philanthropy" 
//         } 
//     },
//     "u02": {
//         "firstName": "Dany",
//         "lastName": "entezari",
//         "followers": 20,
//     },
//     "u03": {
//         "firstName": "Jon",
//         "lastName": "Doe"
//     }
// }







// console.log( users["u01"]["followers"] ) // 10000000

// console.log( users['u01']['interests']['social'] ) // "philanthropy" 


// var newUser = {
//     "firstName": "Jon",
//     "lastName": "Doe"
// }


// // Add (or reassign) an element (or value)
// users['u03'] = newUser

// // Delete
// delete users['u03']['lastName']




// ------------------------------------------------------------------------------------
// 6 Functions


// // Declaring the function
// function sumTwoNumbers(numA, numB) {
//     var result = numA + numB;
//     return result;
// }


// // Call (invoke) the function
// sumTwoNumbers(5,6);         // 11






var prices = [
    500,
    600,
    750,
    250
];


var fees = [
    100,
    120,
    100,
    120
];


function getTotalOfArray(someArray) {
    var total = 0;

    for(var i = 0; i<someArray.length; i++) {
        total += someArray[i];
    }

    console.log( total );
}


getTotalOfArray(prices);