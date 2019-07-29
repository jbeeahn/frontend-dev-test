import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { NavLink } from "react-router-dom"
import * as _ from "lodash"

import AppActions from "../actions/app-actions"

class CreditContainer extends Component {
  componentDidMount() {
    const { fetchCredit } = this.props
    fetchCredit()
  }

  renderCreditList = () => {
    const { credits } = this.props
    return credits.map(credit => {
      return (
        <div className="app-main--credit-entry" key={credit}>
          {credit}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="app-main--credit-container">
        <div className="app-main--credit-title">Credit</div>
        <div className="app-main--credit-list">{this.renderCreditList()}</div>
        <NavLink className="app-main--credit-back" to="/" exact>
          Back
        </NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.appReducer
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...AppActions
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditContainer)
