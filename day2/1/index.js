import { parseData } from "../helpers/parseData";
import { data } from "../helpers/data";
import { pointsEnum } from "../helpers/pointsEnum";

const chooseMap = {
  'X': {
    equal: 'A',
    win: 'C',
    loss: 'B',
    score: 1,
  },
  'Y': {
    equal: 'B',
    win: 'A',
    loss: 'C',
    score: 2,
  },
  'Z': {
    equal: 'C',
    win: 'B',
    loss: 'A',
    score: 3
  }
}

const roundResult = (round) => {
  const enemyChoose = round[0];
  const myChoose = round[2];
  let roundScore = chooseMap[myChoose].score

  switch (enemyChoose) {
    case chooseMap[myChoose].equal:
      roundScore += pointsEnum.draw;
      break
    case chooseMap[myChoose].loss:
      roundScore += pointsEnum.loss;
      break
    case chooseMap[myChoose].win:
      roundScore += pointsEnum.win;
      break
  }

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
