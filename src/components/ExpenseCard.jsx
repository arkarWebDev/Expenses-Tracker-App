// helpers imports
import {
  calcSpentByBudget,
  formatCurrency,
  formatPercent,
} from "../helpers/helpers";

const ExpenseCard = ({ budget }) => {
  const { id, name, amount } = budget;
  const spent = calcSpentByBudget(id);

  return (
    <div className="bg-cus-green text-white rounded-xl p-4">
      <p className="text-xl xl:text-2xl font-bold">{name}</p>
      <p className="text-xs xl:text-sm font-semibold">
        {formatCurrency(amount)} Budgeted
      </p>
      <progress max={amount} value={spent}>
        {formatPercent(spent / amount)}
      </progress>
      <div className="flex items-center justify-between text-xs font-medium">
        <p>{formatCurrency(spent)} spent</p>
        <p>{formatCurrency(amount - spent)} remaining</p>
      </div>
    </div>
  );
};

export default ExpenseCard;
