// rrd imports
import { redirect } from "react-router-dom";

// toastify import
import { toast } from "react-toastify";

// helper imports
import { deleteUserName } from "../helpers/helpers";

export const logoutAction = async () => {
  // delete username
  deleteUserName({
    key: "userName",
  });

  deleteUserName({
    key: "budgets",
  });

  deleteUserName({
    key: "expenses",
  });

  // alert
  toast.success("Session is destroyed.");

  //   redirect
  return redirect("/logout");
};
