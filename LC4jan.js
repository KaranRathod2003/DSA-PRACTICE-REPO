//ROMEN TO INTEGER


let str = "LVIII"
const romen_value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M:1000,
}
// for(let i = 0; i<str.length; i++){
//     // console.log(romen_value[str[i]])
//     console.log(str[i])
// }
// str[i]
let result = 0;
for (let i = 0; i<str.length; i++){
    if (romen_value[str[i]] < romen_value[str[i+1]]){
        result -= romen_value[str[i]]
    }
    else{
        result += romen_value[str[i]]
    }
}
console.log(result)
