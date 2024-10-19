import './index.css'

const MoneyDetails = () => (
  <div className="moneyDetialsContainer">
    <div className="balance-income-expenses balance">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="balance-income-expenses-image"
      />
      <div className="balance-income-expenses-container">
        <p className="balance-income-expenses-title">Your Balance</p>
        <p className="balance-income-expenses-rs">RS 0</p>
      </div>
    </div>
    <div className="balance-income-expenses income">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        className="balance-income-expenses-image"
      />
      <div className="balance-income-expenses-container">
        <p className="balance-income-expenses-title">Your Income</p>
        <p className="balance-income-expenses-rs">RS 0</p>
      </div>
    </div>
    <div className="balance-income-expenses expenses">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
        className="balance-income-expenses-image"
      />
      <div className="balance-income-expenses-container">
        <p className="balance-income-expenses-title">Your Expenses</p>
        <p className="balance-income-expenses-rs">RS 0</p>
      </div>
    </div>
  </div>
)
export default MoneyDetails
