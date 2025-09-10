function capitalizeEnds(word) {
    if (word.length < 8) {
        return "Xato: 8 tadan kam harf kiritildi"
    }
    const start = word.slice(0, 2).toUpperCase()
    const middle = word.slice(2, -2)
    const end = word.slice(-2).toUpperCase()
    return start + middle + end
}

console.log(capitalizeEnds("javascript"))
console.log(capitalizeEnds("java"))  
