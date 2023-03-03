import React from "react";
const Missing = () => {
  return (
    <section className="container flex flex-col md:flex-row items-center justify-center min-h-screen max-w-4xl gap-3 mx-auto">
      <div>
        <img src={require("../imgs/Maintenance.png")} alt="maintenance" />
      </div>
      <div className="w-full text-center md:text-left">
        <h1 className="text-5xl text-cus-green font-serif font-extrabold mb-4">
          Sorry !
        </h1>
        <h2 className="text-lg font-medium text-gray-300 ">
          Application is currently in maintenance.
          <p>
            If you have any problems
            <span className=" underline text-cus-green">
              {" "}
              Contact Developer
            </span>
          </p>
        </h2>

        <button className=" border border-cus-green text-cus-green px-8 py-2 mt-6 font-medium text-lg rounded-lg hover:text-white hover:bg-cus-green duration-150">
          Use other versions
        </button>
      </div>
    </section>
  );
};

export default Missing;
