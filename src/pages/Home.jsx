import React from "react";
import Banner from "../components/Banner";
import Cube3d from "../components/Cube3d";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="intro flex justify-center my-[50px] translate-y-[100px] min-h-[250px] gap-[300px] max-md:flex-col max-md:items-center max-md:gap-[100px] max-md:translate-y-[-40px]">
        <div className="introText min-w-[100px]">
          <Banner />
        </div>

        <Cube3d />
      </div>
      <br />
      <br />
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap gap-10">
        <div className="max-w-[40%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 transition-transform duration-300">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="/pricing">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Upgrade to pro
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Amplify Your Potential. Unlock exclusive features, enhanced customization, and premium content for an elevated user experience. Access expert tips to master your skills and achieve your goals.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Click Here
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-[40%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 transition-transform duration-300">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                About Us
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Our product offers a transformative solution that revolutionizes the way for data security. Built on cutting-edge technology, our product is designed to deliver exceptional performance and unparalleled user experience.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Know more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
