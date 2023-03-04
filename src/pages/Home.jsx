// components imports
import BudgetForm from "../components/BudgetForm";

const Home = ({ userName }) => {
  return (
    <section className="mt-8 md:mt-20">
      <h1 className=" text-3xl md:text-6xl font-extrabold text-cus-green mb-3">
        Welcome, <span>{userName}</span>
      </h1>
      <p className="text-gray-500 text-xl">
        Personal budgeting is the secret to financial freedom.{" "}
        <br className="hidden md:block" />
        Create a budget to get started!
      </p>
      <BudgetForm />
    </section>
  );
};

export default Home;
