// let row=""

var pattern_1 = (n) => {
    for (let i = 0; i < n; i++) {
        row += "* "
    }
    for (let j = 0; j < n; j++) {
        console.log(row)
    }

}
var pattern_2 = (n) => {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {
            row += "* "
        }
        console.log(row)
    }
}
var pattern_3 = (n) => {
    for (let i = 1; i <= n; i++) {
        let string = ""
        for (let j = 1; j <= i; j++) {
            string += i + ""
        }
        console.log(string)
    }
}
var pattern_4 = (n) => {
    for (let i = 1; i <= n; i++) {
        let string = ""
        for (let j = 1; j <= i; j++) {
            string += j + ""
        }
        console.log(string)
    }
}
var pattern_5 = (n)=>{
    for(let i=1; i<=n;i++){
        let row =""
        for(let j=0;j<n-i+1;j++){
            row+="*" + ""
        }
        console.log(row)
    }
    
}
var pattern_6 = (n)=>{
    for(let i=1; i<=n;i++){
        let row =""
        for(let j=1;j<=n-i+1;j++){
            row+=j + ""
        }
        console.log(row)
    }
    
}
var pattern_7 = (n) =>{
    //Outer Loop
    for(let i=0; i<n;i++){
        let row = "";
        //inner loops...
        //space
        for(let j=0;j<n-i-1;j++){
            row+= " "
        }
        //star
        for(let j = 0 ; j<2*i+1;j++){
            row += "*"
        }
        //space
        for(let j=0;j<n-i-1;j++){
            row += " "
        }
        console.log(row)
    }
}
var pattern_8 = (n) =>{
    //Outer Loop
    for(let i=0; i<n;i++){
        let row = "";
        //inner loops...
        //space
        for(let j=0;j<i;j++){
            row+= " "
        }
        //star
        for(let j = 0 ; j<2*n - (2*i + 1);j++){
            row += "*"
        }
        //space
        for(let j=0;j<i;j++){
            row += " "
        }
        console.log(row)
    }
}

var pattern_9 = (n) =>{
    //outer loop
    for(let i=1;i<=2*n - 1; i++){
        let string = ""
        let star = i;
        if(i > n) star = 2*n-i;
        for(let j = 1; j<=star;j++){
            string += "*"
        }
        console.log(string)
    }
}
var pattern_10 = (n) =>{
    for(let i=0; i<n;i++){
        let string = ""
        let start = 1
        if(i%2 == 0) {
            start = 1
        }
        else{
            start = 0
        }
        for(let j=0;j<=i;j++){
            string += start;
            start = 1-start
        }
        console.log(string)
    }
}
var pattern_11 = (n) =>{
    let space = 2*(n-1)
    for(let i=1;i<=n;i++){
        //numbers
        let string =""
        for(let j=1;j<=i;j++){
            string += j
        }

        //space
        for(let j=1;j<=space;j++){
            string += " "
        }

        //numbers
        for(let j=i;j>=1;j--){
            string += j
        }
        console.log(string)
        space -= 2
    }
}
var pattern_12 = (n) =>{
    let num = 1;
    for(let i = 1; i<=n;i++){
        let string = ""
        for(let j=1;j<=i;j++){
            string += num + " ";
            num = num + 1
        }
        console.log(string)
    }
}
var pattern_13 = (n) =>{
    for (let i = 1; i <= n; i++) {
        let string = "";
        let char = "A"; // Always starts with 'A'
        for (let j = 1; j <= i; j++) {
            string += char + " ";
            char = String.fromCharCode(char.charCodeAt(0) + 1); // Increment the character
        }
        console.log(string);
    }
}
var pattern_001 = (n) =>{
    let start  = 1;
    for(let i=1; i<=n;i++){
        let string = "";
        if(i % 2 == 0){
            start = 0
        }
        else{
            start = 1
        }
        for(let j = 1; j<=i;j++){
            string += start;
            start = 1 - start;
        }
        console.log(string)
    }
}
//hollow square
var pattern_002 = (n) =>{
    for(let i =0; i<n;i++){
        let string = "";
        for(let j=0; j<n;j++){
           if(i == 0 || j == 0 || j == n-1 || i == n-1){
            string += "*"
           }
           else{
            string += " "
           }
        }
        console.log(string)
    }
}
// pattern_7(5)
pattern_002(7)
// pattern_11(4)