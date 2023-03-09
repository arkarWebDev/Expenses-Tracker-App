import Table from "../components/Table";

const TableContainer = ({ expenses }) => {
  return (
    <>
      <h2 className="text-3xl font-bold my-3">Recent Expenses</h2>
      <div className="relative overflow-x-auto">
        <Table expenses={expenses} />
      </div>
    </>
  );
};

export default TableContainer;
