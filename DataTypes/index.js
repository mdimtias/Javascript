/* Primitive Data Types:

Number: Represents numeric values, e.g., 42, 3.14.
String: Represents a sequence of characters, e.g., "Hello, World!".
Boolean: Represents either true or false.
Undefined: Represents a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any object value.
Symbol: Represents a unique identifier (added in ECMAScript 6).
Reference Data Types:

Object: Represents a collection of key-value pairs and is used to store complex data structures.
Function: A special type of object that can be invoked (called) and can have properties and methods.
Array: A special type of object that stores a collection of elements in an ordered manner.
Date: Represents a specific moment in time.
RegExp: Represents a regular expression, used for pattern matching in strings.
*/

var person = {name: "Tanbir", age: "21"};
var man = person;
var man = {};
person.city = "Chittagong";
console.log(person);
console.log(man);