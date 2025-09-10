function isValidEmail(email) {
    let atIndex = -1
    let dotAfterAt = false

    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            if (atIndex !== -1 || i === 0 || i === email.length - 1) {
                return false
            }
            atIndex = i
        }
        if (atIndex !== -1 && email[i] === ".") {
            if (i === email.length - 1) return false
            dotAfterAt = true
        }
    }

    if (atIndex === -1) return false
    if (!dotAfterAt) return false
    if (email[email.length - 1] === ".") return false

    return true
}

console.log(isValidEmail("hello@loremipsum"))
console.log(isValidEmail("hello@lorem.ipsum"))
console.log(isValidEmail("he.llo@loremipsum."))
console.log(isValidEmail("@hello.loremipsum"))
console.log(isValidEmail("@helloloremipsum"))
console.log(isValidEmail("hello.lor@emipsum"))
console.log(isValidEmail("hello@world.com"))
