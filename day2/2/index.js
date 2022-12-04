import { parseData } from "../helpers/parseData";
import { data } from "../helpers/data";
import { pointsEnum } from "../helpers/pointsEnum";

const chooseMap = {
  'A': {
    draw: 'A',
    loss: 'C',
    win: 'B',
    score: 1,
  },
  'B': {
    draw: 'B',
    loss: 'A',
    win: 'C',
    score: 2,
  },
  'C': {
    draw: 'C',
    loss: 'B',
    win: 'A',
    score: 3
  }
}

const signalENUM = {
  'Y': 'draw',
  'X': 'loss',
  'Z': 'win'
}

const roundResult = (round) => {
  const enemyChoose = round[0];
  const signalToChoose = signalENUM[round[2]];

  const myChoose = chooseMap[enemyChoose][signalToChoose]


  const roundScore = chooseMap[myChoose].score + pointsEnum[signalToChoose]

  return roundScore
}

const getScore = (roundArray) => {
  let totalScore = 0;
  roundArray.forEach((round) => {
    totalScore += roundResult(round)
  })

  return totalScore
}

const parsed = parseData(data)
const totalScore = getScore(parsed)
