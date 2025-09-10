function sortByFrequency(arr) {
    return arr.sort((a, b) => 
        arr.filter(x => x === b).length - arr.filter(x => x === a).length || a - b
    )
}

let arr = [4,1,2,1,2,3,3,3]
console.log(sortByFrequency(arr))