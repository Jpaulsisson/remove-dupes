const wordList = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupEmUp(wordList) {
  if (wordList.length === 0) return [[]]
  if (wordList.length === 1) return [[wordList[0]]]
  const groups = {}

  for (let word of wordList) {
    let target = word.split('').sort().join('')
    if (groups[target]) {
      groups[target].push(word)
    }
    else {
      groups[target] = [word]
    }
  }
  return [...Object.values(groups)]
}

// BOOOOOM!!!! Storing the values in a single object significantly increased the runtime. Still not close to the best on LeetCode but I'm proud of this.

// The fastest runtime solution on LeetCode did almost this exact same thing except they used a Map() instead of an object. Cool to know that Maps are that much faster. I will remember that in the future

console.log(groupEmUp(wordList))


















