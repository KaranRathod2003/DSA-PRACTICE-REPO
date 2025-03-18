
// let count = 1
function print_num(n) {
    if(n === 0) return;
    print_num(n - 1)
    console.log(n)
}
// print_num(64)

// sum of first n number
//1. parameterised
function sumofn(i, sum){
    if(i<1){
        console.log(sum);
        return
    }
    sumofn(i-1, sum+i)
}
// functional way 
function sumofN (n){
    if(n===0){
        return 0;
    }
    return n +  sumofN(n-1)
}
let n = 4
// console.log(sumofN(n))


// Reverse an array traditional method
let arr = [1, 2, 3, 4, 2];
let legnthh = arr.length
let left_pointer = 0;
let right_pointer = legnthh - 1
// console.log(right_pointer)
while(left_pointer < right_pointer){
    [arr[left_pointer], arr[right_pointer]] = [arr[right_pointer], arr[left_pointer]]
    left_pointer++
    right_pointer--
}
// console.log(arr)


// Now using recursion
function reversearr(arr,left, right){
    if(left>=right){
        return;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    reversearr(arr,left+1, right-1)
} 
let arra = [1, 2, 3, 4, 5]
reversearr(arra, 0, arra.length - 1)
console.log(arra)