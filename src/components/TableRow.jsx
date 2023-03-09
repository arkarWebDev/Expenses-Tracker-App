import { DocumentMinusIcon } from "@heroicons/react/24/solid";

import {
  budgetOfExpense,
  formatCurrency,
  formatDate,
} from "../helpers/helpers";

const TableRow = ({ expense }) => {
  const { name, amount, created_at } = expense;
  const budget = budgetOfExpense({
    key: "id",
    type: "budgets",
    value: expense.budget_id,
  })[0];

  return (
    <>
      <tr className="bg-white border-b">
        <td className="px-6 py-4 font-medium">{name}</td>
        <td className="px-6 py-4 font-medium">{formatCurrency(amount)}</td>
        <td className="px-6 py-4 font-medium">{formatDate(created_at)}</td>
        <td className="px-6 py-4 font-medium">
          <span className="bg-cus-green w-fit text-white font-medium px-2 py-1 rounded-full text-sm">
            {budget.name}
          </span>
        </td>
        <td className="px-6 py-4 font-medium">
          <DocumentMinusIcon
            width={24}
            className="text-red-600 cursor-pointer"
          />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
