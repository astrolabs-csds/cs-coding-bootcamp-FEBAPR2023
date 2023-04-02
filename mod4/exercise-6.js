// JS Exercise 6
var alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
];

// 1. Create a function called "arrayInfo"
// 2. This function will have one parameter "someArray"
// 3. Program this function to loop over every element in "someArray" and console.log()
//    the value of each element
// 4. Program this function to return the length of "someArray"
// 5. If the algorithm reaches the final element, alert() the value of the final element 

// Your code goes below...
function arrayInfo(someArray) {

    for(var i = 0; i < someArray.length; i++) {
        console.log( someArray[i] );

        if(i == someArray.length-1 ) {
            alert( someArray[i] )
        }
 
    }

    return someArray.length

}

console.log(arrayInfo(alphabet));