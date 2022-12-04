import { data } from '../helpers/data'
import { parseInputData } from '../helpers/parseInputData'
import { callorySum } from '../helpers/callorySum'

const sumOfNBiggest = (elfArray, count) => {
  const calloryArray = [];

  elfArray.forEach((eatCalloryArray) => {
    const calloryInBackpack = callorySum(eatCalloryArray)
    calloryArray.push(calloryInBackpack)
  })

  calloryArray.sort((a, b) => {
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    if (a === b)
      return 0
  })

  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += calloryArray[calloryArray.length - i]
  }

  return sum
}

const parsedData = parseInputData(data)
const calloryOfThreeBiggest = sumOfNBiggest(parsedData, 3)

console.log(calloryOfThreeBiggest)