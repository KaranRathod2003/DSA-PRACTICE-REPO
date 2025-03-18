// SECOND LARGEST DISTICNT ELEMENT

function second_largest(arr) {
    // remove duplicates
    const newArr = Array.from(new Set(arr));
    newArr.sort((a, b)=>{
        return b - a;
    })
    if(newArr.length >= 2){
        return newArr[1]
    }
    else{
        return -1
    }
}

console.log(second_largest([10,5,10]))