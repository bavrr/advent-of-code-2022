export const parseInputData = (stringToParse) => {
  const result = []

  const parsedArray = stringToParse.replaceAll(/\n/g, ',').split(',,');
  parsedArray.forEach((stringInside) => {
    const resultedArray = [];
    stringInside.split(',').forEach((string) => {
      resultedArray.push(Number(string))
    })
    result.push(resultedArray)
  })

  return result
}