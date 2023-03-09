// get name
export function fetchLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

// delete name
export const deleteUserName = ({ key }) => {
  return localStorage.removeItem(key);
};

//color generate
// const colorGenerator = (key) => {
//   const budgetsLength = fectchLocal("budgets")?.length ?? 0;
//   return `${budgetsLength * 34} 65% 50%`;
// };

// newBudget create
export const createNewBudget = ({ budget_name, budget_amount }) => {
  const newBudget = {
    id: crypto.randomUUID(),
    name: budget_name,
    amount: Number(budget_amount),
    created_at: new Date(),
    // color: colorGenerator(),
  };

  const existingBudgets = fetchLocal("budgets") ?? [];
  localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newBudget])
  );
};

// newExpense create
export const createNewExpense = ({
  expense_name,
  expense_amount,
  budget_id,
}) => {
  const newExpense = {
    id: crypto.randomUUID(),
    budget_id,
    name: expense_name,
    amount: Number(expense_amount),
    created_at: new Date(),
  };

  const existingExpenses = fetchLocal("expenses") ?? [];
  localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newExpense])
  );
};

// delete expense
export const deleteExpense = ({ key, expenseID }) => {
  const existingItems = fetchLocal(key);
  const newItems = existingItems.filter((item) => item.id !== expenseID);
  return localStorage.setItem(key, JSON.stringify(newItems));
};

// formatting

// format budget currency
export const formatCurrency = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};

// total spent by budget
export const calcSpentByBudget = (budget_id) => {
  const expenses = fetchLocal("expenses") ?? [];
  const spentedBudget = expenses.reduce((acc, expense) => {
    // check id is same ?
    if (expense.budget_id !== budget_id) return acc;

    // add to total
    return (acc += expense.amount);
  }, 0);
  return spentedBudget;
};

// format percent
export const formatPercent = (amount) => {
  amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// format Date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

// budget of expense
export const budgetOfExpense = ({ key, value, type }) => {
  const data = fetchLocal(type) ?? [];
  return data.filter((item) => item[key] === value);
};
