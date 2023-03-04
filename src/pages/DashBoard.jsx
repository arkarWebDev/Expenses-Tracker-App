// rrd imports
import { useLoaderData } from "react-router-dom";
import { getUserName } from "../helpers/helpers";

// pages imports
import Intro from "./Intro";

export const dashboardAction = async ({ request }) => {
  try {
    const data = await request.formData();
    const username = data.get("userName");
    localStorage.setItem("userName", JSON.stringify(username));
    return username;
  } catch (error) {
    console.log(error.message);
  }
};
export const dashboardLoader = () => {
  const userName = getUserName("userName");
  return { userName };
};

const DashBoard = () => {
  const { userName } = useLoaderData();

  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default DashBoard;
