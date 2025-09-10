function groupAnagrams(words){
    const map = new Map()
    for (let word of words){
        const sortedStr = word.split('').sort().join('')
        if (!map.has(sortedStr)){
            map.set(sortedStr , [])
        }

        map.get(sortedStr).push(word)
    }
    return Array.from(map.values())
}

const sozlar = ["bat", "tab", "tap", "pat", "cat"]
console.log(groupAnagrams(sozlar))