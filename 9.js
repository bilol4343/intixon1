function addEvenIndexElements(arr) {
    const cnt = []
    for (let i = 0; i < arr.length; i += 2) {
        cnt.push(arr[i])
    }
    return arr.concat(cnt)
}

console.log(addEvenIndexElements([1,2,3,4]))
