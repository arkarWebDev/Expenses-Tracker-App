// rrd imports
import { Link, useRouteError } from "react-router-dom";

// svgs imports
import serveDown from "../svgs/server-down.svg";

const Error = () => {
  const error = useRouteError();
  return (
    <section className=" flex items-center justify-center flex-col-reverse  md:flex-row px-10 md:px-60 h-screen text-center">
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <h1 className="text-2xl md:text-5xl text-cus-green font-bold">
          <span className="text-left">Oops ! </span>
          <br />
          <span className="text-xl md:text-2xl font-semibold text-gray-600">
            {" "}
            {error.message || error.statusText || "Something went wrong"}
          </span>
        </h1>
        <div className=" flex items-center space-x-4 font-semibold mt-4 justify-center">
          <Link to={"/"}>
            <p className="bg-cus-green font-lg text-white px-3 py-2 rounded-md border-2 border-cus-green hover:bg-white hover:text-cus-green duration-200">
              Go Back Home
            </p>
          </Link>
          <span className="text-xl text-gray-500">or</span>
          <Link to={"/"}>
            <p className="text-cus-green font-lg bg-white px-3 py-2 rounded-md border-2 border-cus-green hover:bg-cus-green hover:text-white duration-200">
              Report Developer
            </p>
          </Link>
        </div>
      </div>
      <img src={serveDown} alt="server-down" width={600} />
    </section>
  );
};

export default Error;
