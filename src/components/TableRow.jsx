// icons imports
import { DocumentMinusIcon } from "@heroicons/react/24/solid";

// rrd imports
import { Link, useFetcher } from "react-router-dom";

import {
  budgetOfExpense,
  formatCurrency,
  formatDate,
} from "../helpers/helpers";

const TableRow = ({ expense, showBudget }) => {
  const { name, amount, created_at, budget_id } = expense;
  const fetch = useFetcher();

  const budget = budgetOfExpense({
    key: "id",
    type: "budgets",
    value: budget_id,
  })[0];

  return (
    <>
      <tr className="border-b odd:bg-white even:bg-slate-50">
        <td className="px-6 py-4 font-medium">{name}</td>
        <td className="px-6 py-4 font-medium">{formatCurrency(amount)}</td>
        <td className="px-6 py-4 font-medium">{formatDate(created_at)}</td>
        <td className="px-6 py-4 font-medium" hidden={!showBudget}>
          <Link
            to={`/budget/${budget_id}`}
            className="bg-cus-green w-fit text-white font-medium px-2 py-1 rounded-full text-sm"
          >
            {budget.name}
          </Link>
        </td>
        <td className="px-6 py-4 font-medium">
          <fetch.Form method="post">
            <input
              type="text"
              name="_action"
              value="deleteExpense"
              readOnly
              hidden
            />
            <input
              type="text"
              name="expenseID"
              value={expense.id}
              readOnly
              hidden
            />
            <button type="submit">
              <DocumentMinusIcon width={24} className="text-red-600" />
            </button>
          </fetch.Form>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
