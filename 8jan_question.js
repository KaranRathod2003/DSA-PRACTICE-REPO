// Q1: check the the array are equal or not 
const arr_1 = [1, 2, 3, 4, 5]
const arr_2 = [1, 2, 3, 4,5]
let checkArray = (arr1, arr2) =>{
    // if(arr1.length !== arr2.length) return false;
    // for (let i=0; i<arr1.length ; i++){
    //     if(arr1[i] !== arr2[i]) return false
    // }
    // return true
    return arr1.length === arr2.length && arr1.every((element, index)=> arr1[index] === arr2[index])
}

console.log(checkArray(arr_1, arr_2))