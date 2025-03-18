// let strs = ["flower", "flow", "floght"];
// let str = "";

// // Only compare the common prefix across all strings
// strs[0].split("").map((char, index) => {
//   if (strs.every((s) => s[index] === char)) {
//     str += char;
//   }
// });
// console.log(str);

let strs = ["flower", "flow", "flight"];
let str = "";

if (strs.length === 0) {
  console.log(str); // Handle empty array
} else {
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((s) => s[i] === strs[0][i])) {
      str += strs[0][i];
    } else {
      break; // Stop further comparison on mismatch
    }
  }
  console.log(str);
}
