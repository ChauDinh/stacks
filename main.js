/* Stacks */

// functions: push, pop, peek, length

// You could use an array as a stack to store values
var letters = []; // this is our stack

var word = "CCC";

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
 letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
 rword += letters.pop();
}

console.log(rword === word ? word + " is a palindrome." : word + " is Not a palindrome");

// Create a Stack
var Stack = function() {
 this.count = 0; // keep to track how many items are in the stack
 this.storage = {};

 // Add a value onto the end of the stack
 this.push = function(value) {
  this.storage[this.count] = value; // put the value on the top of the stack 
  this.count++;
 }

 // Remove and return the value at the end of the stack
 this.pop = function() {
  if (this.count === 0) {
   return undefined; // There is nothing on the stack
  }

  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count]; // Remove 
  return result; // Return
 }

 this.size = function() {
  return this.count;
 }

 // Return the value at the end of the stack
 this.peek = function() {
  return this.storage[this.count-1];
 }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

