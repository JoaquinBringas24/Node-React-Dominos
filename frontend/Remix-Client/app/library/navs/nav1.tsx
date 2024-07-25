import { useState } from "react";

export default function NavOne({ logo }: { logo: string }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed m-0 w-full bg-gradient-to-r from-indigo-500 to-indigo-600 h-24 content-center">
      <div className="grid grid-cols-6 md:flex">
        <div className="col-span-5 flex flex-row justify-center items-center md:justify-start">
          <img
            className="size-20 rounded-full mx-1 md:mx-6 shadow-lg"
            src={logo}
            alt=""
          />
          <span className="font-medium text-2xl text-white md:text-4xl">
            Domino's
          </span>
        </div>
        <nav className="md:block hidden">
          <ul className="ml-20 flex flex-row justify-between text-lg space-x-4 mr-2">
            <a href="#">
              <li className="my-4 py-3 text-white hover:bg-indigo-700 transition-all duration-200 px-2">
                Order Now
              </li>
            </a>
            <a href="#">
              <li className="my-4 py-3 text-white hover:bg-indigo-700 transition-all duration-200 px-2">
                Promos
              </li>
            </a>
            <a href="#">
              <li className="my-4 py-3 text-white hover:bg-indigo-700 transition-all duration-200 px-2">
                Locations
              </li>
            </a>
            <a href="#">
              <li className="my-4 py-3 text-white hover:bg-indigo-700 transition-all duration-200 px-2">
                My Account
              </li>
            </a>
          </ul>
        </nav>
        <button
          onClick={() => {
            setMenu(!menu);
          }}
          className="md:hidden col-span-1 bg-gray-200 border-gray-300 rounded-full max-w-16 max-h-16 self-center justify-self-center p-5 mr-6"
        >
          {!menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="top-0.5 left-0.5"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          )}
        </button>
        {
          // Mobile version menu activation
          menu && (
            <nav className="md:hidden bg-slate-500 h-screen w-screen opacity-90 p-10 absolute top-[6rem]">
              <ul className="flex flex-col text-center">
                <a href="#">
                  <li className="my-4 border-t-2 border-b-2 py-3 w-full text-white">
                    Order Now
                  </li>
                </a>
                <a href="#">
                  <li className="my-4 border-t-2 border-b-2 py-3 w-full text-white">
                    Promos
                  </li>
                </a>
                <a href="#">
                  <li className="my-4 border-t-2 border-b-2 py-3 w-full text-white">
                    Locations
                  </li>
                </a>
                <a href="#">
                  <li className="my-4 border-t-2 border-b-2 py-3 w-full text-white">
                    My Account
                  </li>
                </a>
              </ul>
            </nav>
          )
        }
      </div>
    </div>
  );
}
