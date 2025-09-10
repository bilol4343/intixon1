function rotateArrayRight(arr, k) {
  const n = arr.length
  k = k % n
  return [...arr.slice(n - k), ...arr.slice(0, n - k)]
}

const originalArray = [1, 2, 3, 4, 5, 6, 7]
const rotatedRight = rotateArrayRight(originalArray, 3)
console.log(rotatedRight)
