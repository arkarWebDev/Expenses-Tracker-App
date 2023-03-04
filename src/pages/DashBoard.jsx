// rrd imports
import { useLoaderData } from "react-router-dom";
import { createNewBudget, fectchLocal } from "../helpers/helpers";

// toastify imports
import { toast } from "react-toastify";

// pages imports
import Intro from "./Intro";
import Home from "./Home";

export const dashboardAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "createUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (error) {
      throw new Error("Something went wrong when creating your account !");
    }
  }

  if (_action === "newBudget") {
    try {
      createNewBudget({
        budget_name: values.newBudget,
        budget_amount: values.newBudgetAmount,
      });
      return toast.success("New budget created.");
    } catch (e) {
      throw new Error("There was an error when creating new budget.");
    }
  }
};
export const dashboardLoader = () => {
  const userName = fectchLocal("userName");
  const budgets = fectchLocal("budgets");
  return { userName, budgets };
};

const DashBoard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>{userName ? <Home userName={userName} budgets={budgets} /> : <Intro />}</>
  );
};

export default DashBoard;
