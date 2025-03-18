// reverse an array without using in built method 


// const arr = [1, 2, 3, 4, 5]
// // let arr_length = arr.length;
// let reverse_arr = []
// // console.log(arr_length)
// for (let i=arr.length-1; i>=0; i--){
//     reverse_arr.push(arr[i]) // time complexity of serach through index is 0(1)
// }
// console.log(reverse_arr)

const arr = [1, 2, 3, 4, 5, 6]
// arr.splice(1, 2)
// console.log(arr);
// arr.splice(1, 0, 2, 3)
// console.log(arr);
// arr.splice(0, 1, 0,1)
// console.log(arr);
arr.splice(0, 5, 0,1,2,3,4,5)
console.log(arr);


// slice give the subarray through our starting and ending index where ending index is not apply instead of ending index - 1 is apply 
// original is same doesn't change 
let new_arr  = [1,2,3,4,5,6]
const sun_arr = new_arr.slice(1,4) // in this case the element index will be 1,2,3 only 
console.log(sun_arr); // output : [2, 3, 4]  no 5....
