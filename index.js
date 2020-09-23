function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(arrayOne, arrayTwo) {
  let sorted = []
  while(arrayOne.length !=0 && arrayTwo.length !=0) {
    let currentMin = findMinAndRemoveSorted(arrayOne)
  }
}