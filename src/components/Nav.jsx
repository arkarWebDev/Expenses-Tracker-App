// hero icons imports
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Form, Link } from "react-router-dom";

const Nav = ({ userName }) => {
  return (
    <nav className=" px-40 py-4 flex items-center justify-between w-full bg-white">
      <Link to={"/"} className="flex items-center">
        <BanknotesIcon width={52} className="inline-block text-cus-green" />
        <span className="text-4xl font-bold ml-3">UR BUDGET</span>
      </Link>
      <div>
        {userName && (
          <Form
            method="post"
            action="/logout"
            onSubmit={(e) => {
              if (!window.confirm("Are you sure to destory this session ?")) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit" className="destroy--btn">
              <span className=" font-semibold text-base">Destroy Session</span>
              <TrashIcon width={20} className="inline-block ml-1" />
            </button>
          </Form>
        )}
      </div>
    </nav>
  );
};

export default Nav;
