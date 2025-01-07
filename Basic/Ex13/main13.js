// Declare a variable named var_name and assign it the string 'abcd'
var var_name = 'abcd';

// Declare a variable named n and assign it the number 120
var n = 120;
console.log(this[var_name])
// Assign the value of n to the property named 'abcd' of the 'this' object
this[var_name] = n;

// Log the value of the property 'abcd' of the 'this' object to the console
console.log(this[var_name]); 