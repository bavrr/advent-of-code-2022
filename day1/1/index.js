import { data } from '../helpers/data'
import { parseInputData } from '../helpers/parseInputData'
import { callorySum } from '../helpers/callorySum'

const biggestCallory = (calloryArray) => {
  let biggest = 0;

  calloryArray.forEach(elfCallory => {
    const currentCallory = callorySum(elfCallory);
    (currentCallory > biggest) && (biggest = currentCallory);
  })

  return biggest
}

const parsedData = parseInputData(data)
const maxCallory = biggestCallory(parsedData)
