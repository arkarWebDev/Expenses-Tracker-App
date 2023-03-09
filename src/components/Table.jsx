// components exports
import TableRow from "./TableRow";

const Table = ({ expenses, limit }) => {
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
            <th scope="col" className="px-6 py-3">
              Budget
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {expenses &&
            expenses.length &&
            expenses
              .slice(0, limit)
              .map((expense) => (
                <TableRow expense={expense} key={expense.id} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
