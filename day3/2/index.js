import { parseInputData } from "../helpers/reader";
import { data } from "../helpers/data";
import {getPrioritySum} from '../helpers/getPrioritySum'

const input = parseInputData(data)


const splitByGroup = (data) => {
  const splited = [];

  let group = []

  for (let index = 0; index < data.length; index++) {
    group.push(data[index])

    if ( index !== 0 && (index + 1) % 3 === 0) {
      splited.push(group)
      group = []
    }
  }

  return splited
}

const getRepeatedItemInGroup = (group) => {

const smallestBackpack = group.sort((a,b) => {
    if (a.length > b.length) {
      return 1;
    }

    if (a.length < b.length) {
      return - 1
    }

    return 0
  })

  for (let index = 0; index < smallestBackpack[0].length; index++) {

    const currentItem = smallestBackpack[0][index]

    if (smallestBackpack[1].indexOf(currentItem) === -1) {
      continue
    }

    if (smallestBackpack[2].indexOf(currentItem) === -1) {
      continue
    }

    return currentItem

  }
}


const splitedByGroup = splitByGroup(input)

const task2 = getPrioritySum(splitedByGroup,getRepeatedItemInGroup)
