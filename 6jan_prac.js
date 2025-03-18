let str = "Let's take LeetCode contest"
let arr = str.split(" ")
let newarr = []
arr.forEach((word)=>{
   let reverseword =  word.split("").reverse().join("")
   console.log(reverseword)
   newarr.push(reverseword)
})

console.log(newarr.join(' '))


// optimized and compact code
// let str = "Let's take LeetCode contest";
// let arr = str.split(" ");
// arr = arr.map((word) => word.split("").reverse().join(""));
// console.log(arr.join(" "));
