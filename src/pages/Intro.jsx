// rrd imports
import { Form } from "react-router-dom";

// imports svgs
import intro from "../svgs/intro.svg";

// icons imports
import { UserPlusIcon } from "@heroicons/react/24/solid";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row gap-3 md:items-center justify-center h-screen">
      <div>
        <h1 className="text-3xl md:text-7xl font-extrabold">
          Take Control
          <br />
          of <span className=" text-cus-green"> Your Money</span>
        </h1>
        <p className="text-lg md:text-2xl my-3">
          Personal budgeting is the secret to financial{" "}
          <br className=" hidden md:block" /> freedom. Start your journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            hidden
            value="createUser"
            name="_action"
            readOnly
          />
          <input
            type="text"
            name="userName"
            placeholder="What is your name?"
            className="border-2 border-gray-400 rounded focus:outline-none text-lg py-2 px-3 block w-full md:w-2/3"
          />
          <button
            type="submit"
            className=" bg-black text-white flex items-center gap-1 text-xl px-4 py-2 rounded mt-3 hover:border-double border border-black duration-150"
          >
            <span>Creat Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={intro} alt="intro" width={600} />
    </section>
  );
};

export default Intro;
