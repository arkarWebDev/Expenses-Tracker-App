// import svgs
import { Link } from "react-router-dom";

// rrd imports
import logout from "../svgs/logout.svg";

const Logout = () => {
  return (
    <section className="flex items-center justify-center text-center h-screen">
      <div>
        <img src={logout} alt="logout" width={500} />
        <h1 className=" text-3xl font-bold font-mono text-cus-green my-2">
          Session Expired !!!
        </h1>
        <Link to={"/"}>
          <p className=" text-lg font-semibold text-gray-500 underline">
            Create your new traker now !
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Logout;
