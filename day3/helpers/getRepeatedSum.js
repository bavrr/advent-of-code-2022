import { letters } from "./letters";


export const getRepeatedSum = (itemMap) => {
  let sum = 0

  for (const item of Array.from(itemMap
    )) {
    sum += (letters.indexOf(item[0]) + 1 ) * item[1]
  }

  return sum
}
