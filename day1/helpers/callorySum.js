export const callorySum = (eatCalloryArray) => {
  let calloryTotal = 0;

  eatCalloryArray.forEach((currentCallory) => calloryTotal += currentCallory)

  return calloryTotal
}