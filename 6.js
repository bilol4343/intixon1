function findMajorityElement(arr) {
  if (arr.length === 0) {
    return undefined
  }

  const counts = {}
  for (const element of arr) {
    counts[element] = (counts[element] || 0) + 1
  }

  let mostFrequentElement = arr[0]
  let maxCount = 0

  for (const element in counts) {
    if (counts[element] > maxCount) {
      maxCount = counts[element]
      mostFrequentElement = element
    }
  }

  return mostFrequentElement
}

const arr = [3, 3, 4, 2, 3, 3, 3]
const result = findMajorityElement(arr)
console.log(result)