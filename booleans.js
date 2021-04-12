// # True or False? 
// 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
console.log(3 == "3");
// true
console.log(3 === "3");
// false


// * Is there a difference? Why/why not? 

// ANSWER: THe loose comparison == translates the number in the string as a number, so that way "3" or " 3" or "003" will be interpreted as equal to 3. Results as true.
// THe strict comparison does not accept a string as equal to a number. Hence false.


// * Which comparison operator should we generally use? Why?

// ANSWER: We will generally use the strict comparison === , since neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal. If the values have the same type, are not numbers, and have the same value, they're considered equal. Finally, if both values are numbers, they're considered equal if they're both not NaN and are the same value, or if one is +0 and one is -0.


// * What would happen if we were to use `=`?

// ANSWER: = asigns a value to a variable so variable § will have the value of "3", for example.



// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.

let melon = 0;
let  message =  (melon) ? "Congratulations you got melon today" : "Sorry, no melon today ";
console.log(message);
// ANSWER: it print Sorry, no melon today



// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.


let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);

// ANSWER: it prints Stacey, because it prints the first value because the variable name is givenName with no value or firstName which is Stacey or John which comes after so JS doesn read further.