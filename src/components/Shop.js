import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
  const dispatch = useDispatch()
  const actions = bindActionCreators(actionCreators, dispatch)

  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button
        className="btn btn-primary"
        onClick={() => actions.withdrawMoney(100)}
      >
        -
      </button>
      Update Money
      <button
        className="btn btn-primary"
        onClick={() => actions.depositMoney(100)}
      >
        +
      </button>
    </div>
  )
}

export default Shop
