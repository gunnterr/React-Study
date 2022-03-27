import expense_data from "./expense_data.json";
import ExpenseList from './components/Expense/ExpenseList';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseList items={expense_data}/>
    </div>
  );
}

export default App;
