import React, { Component } from "react"

import _ from "lodash"

const combinationHorizontal = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const combinationVertical = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
const combinationDiagonal = [[1, 5, 9], [3, 5, 7]]

class WinnerLine extends Component {
  findDirection = (direction, combination) => {
    const index = _.findIndex(direction, (d, index) => {
      return _.isEqual(d, combination)
    })
    const flag = index > -1
    return {
      flag,
      index
    }
  }

  determineClassName = combination => {
    const isHorizontal = this.findDirection(combinationHorizontal, combination)
    const isVertical = this.findDirection(combinationVertical, combination)
    const isDiagonal = this.findDirection(combinationDiagonal, combination)

    if (isHorizontal.flag) {
      return `horizontal horizontal-${isHorizontal.index}`
    }

    if (isVertical.flag) {
      return `vertical vertical-${isVertical.index}`
    }

    if (isDiagonal.flag) {
      return `diagonal diagonal-${isDiagonal.index}`
    }
  }

  render() {
    const lineClassName = this.determineClassName(this.props.combination)
    return <div className={`winner-line ${lineClassName}`} />
  }
}

export default WinnerLine
