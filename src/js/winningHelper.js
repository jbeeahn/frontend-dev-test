import _ from "lodash"

export function winningHelper(selection, list) {
  switch (selection) {
    case 1:
      return test(list, [[2, 3], [5, 9], [4, 7]], selection)

    case 2:
      return test(list, [[1, 3], [5, 8]], selection)

    case 3:
      return test(list, [[1, 2], [5, 7], [6, 9]], selection)

    case 4:
      return test(list, [[1, 7], [5, 6]], selection)

    case 5:
      return test(list, [[1, 9], [2, 8], [3, 7], [4, 6]], selection)

    case 6:
      return test(list, [[4, 5], [3, 9]], selection)

    case 7:
      return test(list, [[1, 4], [3, 5], [8, 9]], selection)

    case 8:
      return test(list, [[2, 5], [7, 9]], selection)

    case 9:
      return test(list, [[7, 8], [1, 5], [3, 6]], selection)

    default:
      break
  }
}

function test(list, combinations, selection) {
  const test = _.map(combinations, item => {
    let isMatch = false
    if (_.includes(list, item[0]) && _.includes(list, item[1])) isMatch = true
    return isMatch
  })

  if (_.includes(test, true)) {
    const trueIndex = _.indexOf(test, true)

    let winningCombination = _.concat(combinations[trueIndex], selection)
    return {
      win: true,
      winningCombination
    }
  }

  return {
    win: false
  }
}
