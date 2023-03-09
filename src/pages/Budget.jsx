// rrd imports
import { useLoaderData, Link } from "react-router-dom";

// icons imports
import { HomeIcon } from "@heroicons/react/24/solid";

// helper imports
import {
  budgetOfExpense,
  createNewExpense,
  deleteExpense,
} from "../helpers/helpers";

// components imports
import ExpenseCard from "../components/ExpenseCard";
import ExpenseForm from "../components/ExpenseForm";
import Table from "../components/Table";

// toast imports
import { toast } from "react-toastify";

export const budgetLoader = ({ params }) => {
  const budget = budgetOfExpense({
    key: "id",
    type: "budgets",
    value: params.id,
  })[0];

  if (!budget) {
    throw new Error("No budget with this id");
  }

  const expenses = budgetOfExpense({
    key: "budget_id",
    type: "expenses",
    value: params.id,
  });

  return { budget, expenses };
};

export const budgetAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

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

  if (_action === "deleteExpense") {
    try {
      deleteExpense({
        key: "expenses",
        expenseID: values.expenseID,
      });
      return toast.success(`Expense deleted`);
    } catch (e) {
      throw new Error("There was a problem deleting new expense.");
    }
  }
};

const Budget = () => {
  const { budget, expenses } = useLoaderData();
  return (
    <>
      <div className="mt-4 xl:flex items-start xl:space-x-4">
        <div className="xl:w-1/2">
          <div className="flex items-center justify-between">
            <h4 className="text-3xl xl:text-4xl font-bold my-4">
              <span className="text-cus-green">{budget.name}</span> Overview
            </h4>
            <Link
              to={"/"}
              className="text-white bg-cus-green font-medium px-3 py-2 flex items-center rounded-lg xl:hidden"
            >
              <HomeIcon width={26} className="inline-block"></HomeIcon>
              <span className="text-xl hidden xl:block xl:ml-1">Go Back</span>
            </Link>
          </div>

          <ExpenseCard budget={budget} deleteMode={true} />
          <ExpenseForm budgets={[budget]} />
        </div>
        <div className="xl:w-1/2" hidden={!expenses.length}>
          <div className="flex items-center justify-between">
            <h4 className="text-3xl xl:text-4xl font-bold my-4">
              <span className="text-cus-green">{budget.name}</span> Expenses
            </h4>
            <Link
              to={"/"}
              className="text-white bg-cus-green font-medium px-3 py-2 xl:flex items-center rounded-lg hidden xl:block"
            >
              <HomeIcon width={26} className="inline-block"></HomeIcon>
              <span className="text-xl hidden xl:block xl:ml-1">Go Back</span>
            </Link>
          </div>
          <div className="relative overflow-x-auto">
            <Table
              expenses={expenses}
              limit={expenses.length}
              showBudget={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
