// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts imports
import Main, { mainLoader } from "./layouts/Main";

// pages loader/action imports
import DashBoard, { dashboardAction, dashboardLoader } from "./pages/DashBoard";
import Expenses, { expenseAction, expensesLoader } from "./pages/Expenses";

// pages action imports
import Logout from "./pages/Logout";
import Error from "./pages/Error";

// actions imports
import { logoutAction } from "./actions/logout";

// tostify imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <DashBoard />,
        loader: dashboardLoader,
        action: dashboardAction,
      },
      {
        path: "logout",
        action: logoutAction,
        element: <Logout />,
      },
      {
        path: "expenses",
        loader: expensesLoader,
        action: expenseAction,
        element: <Expenses />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
