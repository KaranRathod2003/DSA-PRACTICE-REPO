let arr = ["eat", "tea", "tan"]
let map = new Map()
for (const key of  arr){
    const sorted = key.split("").sort().join("")
    console.log(sorted)
    if(!map.has(sorted)){
        map.set(sorted, [])
        console.log(map.set(sorted, []))
    }
    map.get(sorted).push(key)
    console.log(map.get(sorted).push(key))
}

console.log(map.values())