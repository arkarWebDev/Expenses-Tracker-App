// react imports
import { useEffect, useRef } from "react";

// rrd imports
import { Form, useFetcher } from "react-router-dom";

// icons import
import { SquaresPlusIcon } from "@heroicons/react/24/solid";

const BudgetForm = () => {
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
      <div className=" border-dashed border-2 rounded-xl border-black p-3 md:p-6 mt-10 w-full md:w-1/2">
        <h2 className="text-xl font-bold md:text-2xl mb-3">Create budget</h2>
        <fetcher.Form method="post" ref={formRef}>
          <input type="text" hidden name="_action" value="newBudget" readOnly />
          <div className="mb-3">
            <label htmlFor="newBudget" className="block text-lg font-medium">
              Budget name
            </label>
            <input
              type="text"
              name="newBudget"
              id="newBudget"
              placeholder="eg . , Personal"
              autoFocus
              className="border-2 border-gray-60 w-full px-3 py-2 rounded-lg placeholder:text-gray-500 mt-1 text-lg focus:border-cus-green focus:outline-none"
              required
              ref={focusRef}
            />
          </div>
          <div>
            <label
              htmlFor="newBudgetAmount"
              className="block text-lg font-medium"
            >
              Amount
            </label>
            <input
              type="text"
              name="newBudgetAmount"
              id="newBudgetAmount"
              placeholder="eg . , 350$"
              className="border-2 border-gray-60 w-full px-3 py-2 rounded-lg placeholder:text-gray-500 mt-1 text-lg focus:border-cus-green focus:outline-none"
              required
              inputMode="decimal"
            />
          </div>
          <button
            type="submit"
            className="flex items-center bg-black text-white font-medium px-3 py-2 mt-3 w-full md:w-1/2 justify-center rounded-lg"
          >
            <span>Create Budget</span>
            <SquaresPlusIcon width={30} className="ml-1 md:ml-2" />
          </button>
        </fetcher.Form>
      </div>
    </>
  );
};

export default BudgetForm;
