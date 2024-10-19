import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeOptionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }
  onChangeTypeInput = event => {
    this.setState({typeOptionId: event.target.value})
  }
  render() {
    const {titleInput, amountInput, typeOptionId, transactionsList} = this.state
    return (
      <div className="moneyManagerAppContaier">
        <div className="accountHoldereConatiner">
          <h1 className="acoountHolder">Hi, Richard</h1>
          <p className="bankAccountDesc">
            Welcome back to your{' '}
            <span className="bankAccountDescSpan">Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="transactionHistoryContainer">
          <div className="transactionContainer">
            <h1 className="addTransactionHeading">Add Transaction</h1>
            <form className="formContainer">
              <label htmlFor="title" className="title-amount-type-labelHeading">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="SALARY"
                className="title-amount-type-input"
                value={titleInput}
                onChange={this.onChangeTitleInput}
              />
              <label
                htmlFor="amount"
                className="title-amount-type-labelHeading"
              >
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                placeholder="AMOUNT"
                className="title-amount-type-input"
                value={amountInput}
                onChange={this.onChangeAmountInput}
              />
              <label htmlFor="type" className="title-amount-type-labelHeading">
                TYPE
              </label>
              <select
                id="type"
                className="title-amount-type-input"
                value={typeOptionId}
                onChange={this.onChangeTypeInput}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="addBtn">
                Add
              </button>
            </form>
          </div>
          <div className="historyContainer">
            <h1 className="historyHeading">HISTORY</h1>

            <ul className="tableContainer">
              <li className="listTable">
                <p className="transactionItemTitle-amount-type">Title</p>
                <p className="transactionItemTitle-amount-type">Amount</p>
                <p className="transactionItemTitle-amount-type">Type</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
