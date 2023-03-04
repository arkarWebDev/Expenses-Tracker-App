// get name
export function fectchLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

// delete name
export const deleteUserName = ({ key }) => {
  return localStorage.removeItem(key);
};

//color generate
const colorGenerator = (key) => {
  const budgetsLength = fectchLocal("budgets")?.length ?? 0;
  return `${budgetsLength * 34} 65% 50%`;
};

// newBudget create
export const createNewBudget = ({ budget_name, budget_amount }) => {
  const newBudget = {
    id: crypto.randomUUID(),
    name: budget_name,
    amount: Number(budget_amount),
    created_at: new Date(),
    color: colorGenerator(),
  };

  const existingBudgets = fectchLocal("budgets") ?? [];
  localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newBudget])
  );
};
