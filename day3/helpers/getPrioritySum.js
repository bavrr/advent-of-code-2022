
import {getRepeatedSum} from './getReapeatedSum'

export const getPrioritySum = (data, cb) => {
  const itemMap = new Map()

  data.forEach(element => {
    const item = cb(element)
    
    let itemInMap = itemMap.get(item)

    if (itemInMap) {
      itemMap.set(item, ++itemInMap)
    } else {
      itemMap.set(item, 1)
    }
  });


  const repeatedSum = getRepeatedSum(itemMap)

  return repeatedSum
}
