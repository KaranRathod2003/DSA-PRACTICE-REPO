let a = "Hello, "

// charAt() method returns the character at the specified index in a string.
console.log(a.charAt(4))  // o
console.log(a[4]); // o

// charCodeAt() method returns the Unicode of the character at the specified index in a string.
console.log(a.charCodeAt(3)) // 108 means at index 3 character is l and the ascii value of l is 108

// The concat() method of String values concatenates the string arguments to this string and returns a new string.
let b = "karan";
console.log(a.concat(b, ", Have a nice day")) // Hello, karan, Have a nice day
console.log(a)

// includes() method determines whether a string contains the characters of a specified string.
// This method returns true if the string contains the characters, and false if not.
console.log(a.includes(b)) // false
console.log(b.includes("ran")) // true

// indexOf() method returns the 'index' within the calling 'String object' of the "first occurrence" of the specified value, starting the search at fromIndex.
console.log(a.indexOf("l")) // 2
console.log(a.lastIndexOf("l")) // 3

// localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
console.log("this is localeCompare",a.localeCompare(b));

// slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(a.slice(1, 4)) // ell

// split() method splits a String object into an array of strings by separating the string into substrings.
let str = "This is new string which is converted into an array with the help of split"
console.log("letters: ",str.split("")); // "" without any spaces the string will be converted into an array of characters/letters.
// console.log("words: ",str.split(" ")); // " " with spaces the string will be converted into an array of words.
console.log("First we split and then we join it: ",str.split(" ").join(" "));

// substr() method returns the characters in a string beginning at the specified location through the specified number of characters using the index. it is same as slice() method.
console.log(a.substr(1, 3)) // ell

// trim() method removes whitespace from both ends of a string.
let c = "   Hello, World!   ";
console.log(c.trim()); // "Hello, World!"
console.log(a.trim()); // "Hello,"
console.log(c) // "   Hello, World!   "

let obj = {
    name: "karan",
    age: 21,
}
console.log(JSON.stringify(obj)) 
let num = 123;
console.log(num.toString()) // "123"






