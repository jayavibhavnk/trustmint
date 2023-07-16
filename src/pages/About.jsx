import React from "react";
import Card from "../components/Card";
import Iframe from "react-iframe";
import Vite from "../asset/Vite.svg";
import ReactImg from "../asset/react.svg";
import TailwindImg from "../asset/tailwindcss.svg";

function About() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb=8 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            About Us
          </h1>
          <p className="text-center my-[80px] text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-38 dark:text-gray-400">
          Trust Mint is a revolutionary decentralized system for secure and transparent file storage using Non-Fungible Tokens (NFTs). By leveraging blockchain technology and smart contracts, Trust Mint ensures authorized users can encrypt and decrypt files. It utilizes the InterPlanetary File System (IPFS) for decentralized storage, providing enhanced security and availability. The contract deployed in Motoko handles NFT minting and management, ensuring the integrity and authenticity of digital assets. With a user-friendly interface built with React JS and Plug Wallet-based authentication, Trust Mint enables effortless file management. It empowers users with control over their data in a decentralized manner, featuring efficient file handling, transparent file history, and a modern interface.
          </p>
          <div className="about-video">
            <Iframe
              width="100%"
              height="558"
              src="https://www.youtube.com/embed/nuORLKIt8Ls"
              title="GFG Hackathon"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <h1 className="mt-[150px] mb-[100px] text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Team Behind Trust Mint
          </h1>
          <Card />
          <h1 className="mt-[150px] mb-[100px] text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Integrated Technologies
          </h1>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center m-3">
              <img src={Vite} alt="Image Description" className="w-32 h-32" />
              <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                Vite
              </p>
            </div>
            <div className="flex flex-col items-center m-3">
              <img
                src={ReactImg}
                alt="Image Description"
                className="w-32 h-32"
              />
              <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                React Js
              </p>
            </div>
            <div className="flex flex-col items-center m-3">
              <img
                src={TailwindImg}
                alt="Image Description"
                className="w-32 h-32"
              />
              <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <footer className="bg-white dark:bg-gray-900 bottom-0">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 mr-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Trust Mint
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="https://react.dev/learn" class="hover:underline">
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="https://github.com/nishhdgop/TrustMintDAO" class="hover:underline ">
                        Github
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="" className="hover:underline">
                  Trust Mint
                </a>
                . Built During Ur Hackathon.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default About;
