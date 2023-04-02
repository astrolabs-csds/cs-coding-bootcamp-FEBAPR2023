
// Use the appropriate control statement to count up to 10.
// If the counter goes above 5, console.log() the letters A,B,..,E

// This is the sequence of outputs
// 1,2,3,4,5,A,B,C,D,E

// Make sure to open the console panel in your browser


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log("A");
console.log("B");
console.log("C");
console.log("D");
console.log("E");




// counter
// comparison
// increment

for(var counter = 1; counter <= 10; counter++) {
    
    if(counter < 6) {
        console.log(counter);
    }

    else if (counter == 6) {
        console.log("A");
    }

    else if (counter == 7) {
        console.log("B");
    }

    else if (counter == 8) {
        console.log("C");
    }

    else if (counter == 9) {
        console.log("D");
    }

    else if (counter == 10) {
        console.log("E");
    }

}


