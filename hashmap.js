// function hashing(length_of_arr, number, arr){
//     let hash_arr = new Array(length_of_arr).fill(0)
//     for(let i=0; i<arr.length; i++){
//         hash_arr[arr[i]] += 1
//     }
//     console.log(hash_arr[number])
// }
// this function is not valid for a big number that is if the length of an array is smallr than any element in an array this program will NaN
// hashing(5,12,[1, 4, 3, 4, 7,12])

function hashing_frequency(arr){
    let hash_arr = new Array(Math.max(...arr)+1).fill(0)
    for(let i=0; i<arr.length; i++){
        hash_arr[arr[i]] += 1
    }
    // indexing is from One 1...
    // hash_arr.shift()
    return hash_arr.slice(1);
}
// standard method of hashing using hash array to the max value of the array element 
// console.log(hashing_frequency([1, 4, 3, 4, 7,5,2, 2, 7, 8, 10, 13, 12])) 

// HASH USING MAP
function hashmapping(arr, number){
    let map = new Map;
    for(let i = 0; i<arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }
    console.log(map.get(number) || 0)
}
// hashmapping(["a","a", "b", "k"], "c")


//
var majorityElement = function(nums) {
    let map = new Map();
    let highest;
    let max = 0, min = Infinity;
    let lowest;
    for(i=0; i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0)+1)
    }
    for( let [key, value] of map){
        if(value > max){
            max = value
            highest = key
        }
        if(value < min ){
            min = value
            lowest = key
        }
    }
    return `highest = ${highest}, lowest = ${lowest}`;
};
console.log(majorityElement([3, 2, 3, 2, 3, 4]))






// rotate array by K... to the left 
var rotate = function(nums, k) {
    let size = nums.length
    // if(size < k){
    //     k = k % size
    // } // to right 
    if(size > k){
        k = k % size
    } // to left
    let items_remove = nums.splice(0, k)
    // let items_remove = nums.splice(size - k, size) to right 
    nums.push(...items_remove) // to left 
    // nums.unshift(...items_remove) // to right
    return nums
};
// console.log(rotate([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3))


