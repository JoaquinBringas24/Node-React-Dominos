import { useState } from "react";

export default function NavOne({ logo }: { logo: string }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed m-0 w-screen bg-gradient-to-r from-indigo-500 to-indigo-600 h-24 content-center">
      <div className="flex justify-evenly">
        <div className="flex flex-row items-center">
          <img
            className="size-20 rounded-full mx-1 md:mx-6 shadow-lg"
            src={logo}
            alt=""
          />
          <span className="font-medium text-2xl text-white md:text-4xl">
            Domino's
          </span>
        </div>
        <nav className="md:block hidden ">
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

        <button className="rounded-full border-2 mx-1 shadow-lg size-14 self-center bg-gray-200 flex justify-center items-center justify-self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="absolute"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <span className="border-2 bg-red-600 text-white rounded-full px-2 bottom-6 left-5 relative ">
            2
          </span>
        </button>

        <button
          onClick={() => {
            setMenu(!menu);
          }}
          className="md:hidden bg-gray-200 border-gray-300 rounded-full max-w-16 max-h-16 self-center p-5 mr-6"
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
            <nav className="md:hidden bg-slate-500 h-screen w-screen opacity-90 p-10 absolute top-[6rem] z-50">
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
