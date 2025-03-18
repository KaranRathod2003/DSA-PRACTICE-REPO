// You are given a string s and a pattern string p, where p contains exactly one '*' character.

// The '*' in p can be replaced with any sequence of zero or more characters.

// Return true if p can be made a substring of s, and false otherwise.

// A substring is a contiguous non-empty sequence of characters within a string.

let str =  "leetcode"
let pattern = "ee*e"
if(pattern.includes("*")){
    let arr = pattern.split("*")
    let prefix = arr[0]
    let suffix = arr[1]
    let prefix_index = str.indexOf(prefix)
    if (prefix_index === -1) return false;
    let suffix_index = str.indexOf(suffix)
    if (suffix_index === -1) return false
    return true
}
return false;