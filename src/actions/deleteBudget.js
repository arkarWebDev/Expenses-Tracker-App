// helpers imports
import { budgetOfExpense, deleteExpense } from "../helpers/helpers";

// toast import
import { toast } from "react-toastify";

// rrd import
import { redirect } from "react-router-dom";

export const deleteBudget = ({ params }) => {
  try {
    deleteExpense({
      key: "budgets",
      expenseID: params.id,
    });

    const existingExpenses = budgetOfExpense({
      key: "budget_id",
      type: "expenses",
      value: params.id,
    });

    existingExpenses.forEach((expense) => {
      deleteExpense({
        key: "expenses",
        expenseID: expense.id,
      });
    });
  } catch (e) {
    throw new Error("There was an error deleting your budget.");
  }

  toast.success("Budget destroyed");

  return redirect("/");
};
