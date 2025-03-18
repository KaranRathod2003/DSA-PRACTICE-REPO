// function extract_digit(n) {
//     let count = 0
//     const original_n = n
//     while (n>0){
//         let digits = n % 10;
//         if(digits !== 0 && original_n % digits == 0){
//             count += 1
//         }
//         n = Math.floor(n / 10)
//     }
//     return count
// }

// console.log(extract_digit(23))



//My solution
// function sumOfDivisors(n) {
//     let sum = 0;
//     for(let i=1; i<=n;i++){
//         for(let j=1; j<=i;j++){
//             if(i%j == 0){
//                 sum += j
//             }
//         }
//     }
//     return sum
// }

// function sumOfDivisors(n) {
//     let sum = 0;
//     for(let i=1; i<=Math.sqrt(n);i++){
//         if( n%i === 0 ){
//             sum += i
//             if((n / i) !== i){
//                 sum += n / i
//             }
//         }
//     }
//     return sum
// }

function sumOfDivisors(n) {
    let total_sum = 0;
    for(let i =1; i <=n;i++){
        let sum = 0
        for(let j = 1; j<=Math.sqrt(i); j++){
            if( i % j === 0){
                sum += j;
                if(j !== (i / j)){
                    sum += i /j
                }
            }
        }
        total_sum += sum
    }
    return total_sum
}
console.log(sumOfDivisors(4))