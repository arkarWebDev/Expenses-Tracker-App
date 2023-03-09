// rrd imports
import { Link } from "react-router-dom";

// components imports
import Table from "../components/Table";

const TableContainer = ({ expenses }) => {
  return (
    <>
      <h2 className="text-3xl font-bold my-3">Recent Expenses</h2>
      <div className="relative overflow-x-auto">
        <Table expenses={expenses} limit={3} />
      </div>
      <div hidden={expenses.length < 3} className="text-right mt-6">
        <Link
          className=" text-white bg-cus-green px-3 py-2 font-medium "
          to={"/expenses"}
        >
          View all expenses
        </Link>
      </div>
    </>
  );
};

export default TableContainer;
