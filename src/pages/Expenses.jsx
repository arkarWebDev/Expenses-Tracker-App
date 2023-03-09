// helper imports
import { Link, useLoaderData } from "react-router-dom";

// icons import
import { HomeIcon } from "@heroicons/react/24/solid";

// helper imports
import { deleteExpense, fetchLocal } from "../helpers/helpers";

// compnents imports
import Table from "../components/Table";

// toast import
import { toast } from "react-toastify";

// loader
export const expensesLoader = () => {
  const expenses = fetchLocal("expenses");
  return { expenses };
};

// action
export const expenseAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

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

const Expenses = () => {
  const { expenses } = useLoaderData();
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="text-4xl font-bold mb-3">All Expenses</h1>
          <h2 className="text-2xl font-bold mb-3">
            Recent expenses{" "}
            <sub className="text-xl font-semibold text-cus-green">
              {expenses.length} totals
            </sub>
          </h2>
        </div>
        <Link
          to={"/"}
          className="text-white bg-cus-green font-medium px-3 py-2 flex items-center rounded-lg"
        >
          <HomeIcon width={26} className="inline-block"></HomeIcon>
          <span className="text-xl hidden xl:block xl:ml-1">Go Back</span>
        </Link>
      </div>
      <Table expenses={expenses} limit={expenses.length} />
    </>
  );
};

export default Expenses;
