import { parseInputData } from "../helpers/reader";
import { data } from "../helpers/data";
import { getPrioritySum } from '../helpers/getPrioritySum'


const getRepeatedItem = (backpack) => {
  const firstCompartment = backpack.slice(0, backpack.length / 2)
  const secondCompartment = backpack.slice(backpack.length / 2)

  const firstCompartmentMap = new Map();
  
  for (const  item of firstCompartment) {
    firstCompartmentMap.set(item,1)
  }

  for (const item of secondCompartment) {
    if (firstCompartmentMap.get(item)) {
      return item
    }
  }
}


const input = parseInputData(data)

const task1 = getPrioritySum(input,getRepeatedItem)
