// helpers imports
import {
  calcSpentByBudget,
  formatCurrency,
  formatPercent,
} from "../helpers/helpers";

// rrd imports
import { Form, Link } from "react-router-dom";

// icons imports
import { BanknotesIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

const ExpenseCard = ({ budget, deleteMode = false }) => {
  const { id, name, amount } = budget;
  const spent = calcSpentByBudget(id);

  return (
    <div className="bg-cus-green text-white rounded-xl p-4">
      <p className="text-xl xl:text-2xl font-bold">{name}</p>
      <p className="text-xs xl:text-sm font-semibold my-1 xl:my-0">
        {formatCurrency(amount)} Budgeted
      </p>
      <progress max={amount} value={spent}>
        {formatPercent(spent / amount)}
      </progress>
      <div className="flex items-center justify-between text-xs font-medium">
        <p>{formatCurrency(spent)} spent</p>
        <p>{formatCurrency(amount - spent)} remaining</p>
      </div>
      <div>
        {deleteMode ? (
          <>
            <Form
              method="post"
              action="deleteBudget"
              onSubmit={(e) => {
                if (
                  !window.confirm(
                    "Are you sure to delete this budget for permanently ?"
                  )
                )
                  e.preventDefault();
              }}
            >
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center font-medium px-3 py-2 rounded-md bg-red-600 text-white mt-4"
                >
                  <span className="mr-2">Permanently Delete</span>
                  <ArchiveBoxXMarkIcon width={20} />
                </button>
              </div>
            </Form>
          </>
        ) : (
          <div className="flex items-center justify-center">
            <Link
              to={`budget/${budget.id}`}
              className="flex items-center font-medium px-2 py-1 bg-white text-cus-green mt-4 rounded-md"
            >
              <span className="mr-2">View Details</span>
              <BanknotesIcon width={20} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseCard;
