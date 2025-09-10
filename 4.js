function areIsomorphic(str1, str2) {
    if (str1.length !== str2.length) return false
    const map1 = {}
    const map2 = {}
    for (let i = 0; i < str1.length; i++) {
        const c1 = str1[i], c2 = str2[i]
        if ((map1[c1] && map1[c1] !== c2) || (map2[c2] && map2[c2] !== c1)) {
            return false
        }
        map1[c1] = c2
        map2[c2] = c1
    }
    return true
}

console.log(areIsomorphic("egg", "add"))  
console.log(areIsomorphic("hello", "salom"))
