// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts imports
import Main, { mainLoader } from "./layouts/Main";

// pages imports
import DashBoard, { dashboardAction, dashboardLoader } from "./pages/DashBoard";
import Logout from "./pages/Logout";

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
