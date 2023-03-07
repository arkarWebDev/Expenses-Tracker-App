// rrd imports
import { useLoaderData } from "react-router-dom";

// helper imports
import {
  createNewBudget,
  createNewExpense,
  fetchLocal,
} from "../helpers/helpers";

// toastify imports
import { toast } from "react-toastify";

// pages imports
import Intro from "./Intro";
import Home from "./Home";

export const dashboardAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "createUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (error) {
      throw new Error("Something went wrong when creating your account !");
    }
  }

  if (_action === "newBudget") {
    try {
      createNewBudget({
        budget_name: values.newBudget,
        budget_amount: values.newBudgetAmount,
      });
      return toast.success("New budget created.");
    } catch (e) {
      throw new Error("There was a problem creating new budget.");
    }
  }

  if (_action === "newExpense") {
    try {
      createNewExpense({
        expense_name: values.newExpense,
        expense_amount: values.newExpenseAmount,
        budget_id: values.budgetCategory,
      });
      return toast.success(`${values.newExpense} expense created`);
    } catch (e) {
      throw new Error("There was a problem creating new expense.");
    }
  }
};

export const dashboardLoader = () => {
  const userName = fetchLocal("userName");
  const budgets = fetchLocal("budgets");
  const expenses = fetchLocal("expenses");

  return { userName, budgets, expenses };
};

const DashBoard = () => {
  const { userName, budgets, expenses } = useLoaderData();

  return (
    <>
      {userName ? (
        <Home userName={userName} budgets={budgets} expenses={expenses} />
      ) : (
        <Intro />
      )}
    </>
  );
};

export default DashBoard;
