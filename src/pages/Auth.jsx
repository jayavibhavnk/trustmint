import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Auth = (props) => {
  const { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 dark:bg-gray-900 backdrop-blur-md">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link
              to="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white text-center justify-center"
            >
              <img
                className="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              <h1 className="text-4xl">Trust Mint</h1>
            </Link>

            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Authenticate
            </h1>

            <form className="space-y-4 md:space-y-6" action="#">
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-indigo-500 flex justify-center items-center gap-2 backdrop-blur-lg"
                onClick={async () => {
                  try {
                    const publicKey = await window.ic.plug.requestConnect();
                    console.log(
                      `The connected user's public key is:`,
                      publicKey
                    );

                    if (publicKey) {
                      // const user = await JSON.stringify(publicKey);
                      // console.log(currentUser);
                      // setCurrentUser(publicKey);
                      localStorage.setItem("userId", publicKey);
                      // navigate("/");
                      window.location.href = "/";
                    }
                  } catch (e) {
                    alert(e);
                  }
                }}
              >
                <i
                  className="fa-solid fa-envelope text-xl"
                  style={{ color: "#071e46" }}
                ></i>
                Connect your Plug wallet
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
