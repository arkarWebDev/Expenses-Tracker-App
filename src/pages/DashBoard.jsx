import React from "react";
import { useLoaderData } from "react-router-dom";
import { getUserName } from "../helpers/fetchHelper";

export const DashboardLoader = () => {
  const userName = getUserName("userName");
  return { userName };
};

const DashBoard = () => {
  const { userName } = useLoaderData();

  return <div>Hi {userName}</div>;
};

export default DashBoard;
