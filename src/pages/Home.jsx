// components imports
import BudgetForm from "../components/BudgetForm";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesContainer from "../layouts/ExpensesContainer";
import TableContainer from "../layouts/TableContainer";

const Home = ({ userName, budgets, expenses }) => {
  return (
    <section>
      {budgets && budgets.length > 0 ? (
        <section className="xl:flex gap-8">
          <div className="xl:w-1/2">
            <BudgetForm />
            <ExpenseForm expenses={expenses} budgets={budgets} />
          </div>
          <div className="mt-10 w-full">
            <ExpensesContainer budgets={budgets} />
            {expenses && expenses.length && (
              <TableContainer expenses={expenses} />
            )}
          </div>
        </section>
      ) : (
        <div className="xl:w-2/3">
          <h1 className=" text-3xl md:text-6xl font-extrabold text-cus-green mb-3">
            Welcome, <span>{userName}</span>
          </h1>
          <p className="text-gray-500 text-xl">
            Personal budgeting is the secret to financial freedom.{" "}
            <br className="hidden md:block" />
            Create a budget to get started!
          </p>
          <BudgetForm />
        </div>
      )}
    </section>
  );
};

export default Home;
