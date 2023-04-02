// 1. Use the prompt() function to prompt the user for details.
//    The details are: firstname, lastname, email, phone
//    Hint: you need 4 prompts (because you have 4 details)

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var email = prompt("Enter your email: ");
var phone = prompt("Enter your phone: ");



// 2. Confirm user details using alert(). 
//    note: do this only after you've collected all the data
//    hint: to add line breaks in alert, use \n
//    for example, alert("Line 1" + "\n" + "Line 2")
//    The format of the alert message should be like this:
//    
//    Thank you for registering.
//    First name: 
//    Last name:
//    Email: 
//    Phone:

alert(
    "Thank you for registering." + "\n" +
    "First name: " + firstName + "\n" +
    "Last name: " + lastName + "\n" +
    "Email: " + email  + "\n" +
    "Phone: " + phone
);