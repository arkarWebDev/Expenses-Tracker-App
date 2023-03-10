import useTrackWidth from "../hooks/useTrackWidth";

// components exports
import { useEffect, useState } from "react";
import ExpenseCard from "../components/ExpenseCard";

const ExpensesContainer = ({ budgets }) => {
  const [limit, setLimit] = useState();
  const [showAll, setShowAll] = useState(false);

  const { width } = useTrackWidth();

  useEffect(() => {
    if (width < 416) {
      setLimit(3);
    } else {
      setLimit(6);
    }
  }, [width]);

  const changeLimit = () => {
    if (width < 416) showAll ? setLimit(3) : setLimit(budgets.length);
    if (width > 416) showAll ? setLimit(6) : setLimit(budgets.length);
    setShowAll(!showAll);
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-3">Existing Budgets</h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        {budgets.slice(0, limit).map((budget) => (
          <ExpenseCard budget={budget} key={budget.id} />
        ))}
      </div>
      <div>
        {width > 416 && (
          <>
            {budgets.length > 6 && (
              <div className="text-right">
                <button
                  onClick={changeLimit}
                  className="text-sm font-semibold text-cus-green border-2 border-cus-green px-3 py-2 w-full md:w-fit mt-3 hover:text-white hover:bg-cus-green duration-150"
                  type="button"
                >
                  {showAll ? <>Show few budgets</> : <>Show all budgets</>}
                </button>
              </div>
            )}
          </>
        )}
        {width < 416 && (
          <>
            {budgets.length > 3 && (
              <div className="text-right">
                <button
                  onClick={changeLimit}
                  className="text-sm font-semibold text-cus-green border-2 border-cus-green px-3 py-2 w-full md:w-fit mt-3 hover:text-white hover:bg-cus-green duration-150"
                  type="button"
                >
                  {showAll ? <>Show few budgets</> : <>Show all budgets</>}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ExpensesContainer;
