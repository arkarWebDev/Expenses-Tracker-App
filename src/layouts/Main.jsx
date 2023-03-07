// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchLocal } from "../helpers/helpers";

// components imports
import Nav from "../components/Nav";

export const mainLoader = () => {
  const userName = fetchLocal("userName");
  return { userName };
};

const DashBoard = () => {
  const { userName } = useLoaderData();

  return (
    <section className="h-screen relative">
      <Nav userName={userName} />
      <main className="px-8 md:px-40">
        <Outlet />
      </main>
    </section>
  );
};

export default DashBoard;
