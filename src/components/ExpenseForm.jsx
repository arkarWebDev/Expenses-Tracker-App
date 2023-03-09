// react imports
import { useEffect, useRef } from "react";

// rrd imports
// eslint-disable-next-line
import { Form, useFetcher } from "react-router-dom";

// icons import
import { SquaresPlusIcon } from "@heroicons/react/24/solid";

const ExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <>
      <div className=" border-dashed border-2 rounded-xl border-black p-3 md:p-6 mt-10 w-full">
        <h2 className="text-xl font-bold md:text-2xl mb-3">
          Add{" "}
          {budgets.length === 1 && (
            <span className="text-cus-green">{budgets[0].name}</span>
          )}{" "}
          Expense
        </h2>
        <fetcher.Form method="post" ref={formRef}>
          <input
            type="text"
            hidden
            name="_action"
            value="newExpense"
            readOnly
          />
          <div className="mb-3">
            <label htmlFor="newExpense" className="block text-lg font-medium">
              Expense Name
            </label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="eg . , Books"
              autoFocus
              className="border-2 border-gray-60 w-full px-3 py-2 rounded-lg placeholder:text-gray-500 mt-1 text-lg focus:border-cus-green focus:outline-none"
              required
              ref={focusRef}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="newExpenseAmount"
              className="block text-lg font-medium"
            >
              Amount
            </label>
            <input
              type="text"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="eg . , 100$"
              className="border-2 border-gray-60 w-full px-3 py-2 rounded-lg placeholder:text-gray-500 mt-1 text-lg focus:border-cus-green focus:outline-none"
              required
              inputMode="decimal"
            />
          </div>
          <div hidden={budgets.length === 1}>
            <label
              htmlFor="budgetCategory"
              className="block text-lg font-medium"
            >
              Budget Category
            </label>
            <select
              name="budgetCategory"
              id="budgetCategory"
              required
              className="border-2 border-gray-60 w-full px-3 py-2 rounded-lg placeholder:text-gray-500 mt-1 text-lg focus:outline-none"
            >
              {budgets
                .sort((a, b) => a.created_at - b.created_at)
                .map((budget) => {
                  return (
                    <option value={budget.id} key={budget.id}>
                      {budget.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <button
            type="submit"
            className="flex items-center bg-black text-white font-medium px-3 py-2 mt-3  justify-center rounded-lg text-lg"
          >
            <span>Add Expense</span>
            <SquaresPlusIcon width={30} className="ml-1 md:ml-2" />
          </button>
        </fetcher.Form>
      </div>
    </>
  );
};

export default ExpenseForm;
