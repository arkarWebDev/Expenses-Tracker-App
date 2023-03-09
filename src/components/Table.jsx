// components exports
import TableRow from "./TableRow";

const Table = ({ expenses, limit, showBudget = true }) => {
  return (
    <>
      <table className="w-full text-left">
        <thead className=" text-white uppercase bg-cus-green">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            {showBudget && (
              <th scope="col" className="px-6 py-3">
                Budget
              </th>
            )}
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {expenses &&
            expenses.length > 0 &&
            expenses
              .slice(0, limit)
              .map((expense) => (
                <TableRow
                  expense={expense}
                  key={expense.id}
                  showBudget={showBudget}
                />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
