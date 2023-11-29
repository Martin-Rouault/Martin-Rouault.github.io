import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="mb-20 mt-6 flex flex-row justify-around items-center">
        <p className="text-2xl font-semibold">Martin Rouault</p>
        <ul className="p-1 flex justify-center gap-8 border-solid border-2 border-zinc-600 rounded-full bg-slate-800 shadow-lg">
          <NavLink to='/'>
            <li className="py-1 px-4 hover:transition duration-300 ease-in-out hover:bg-violet-600 hover:text-white hover:active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-slate-300 rounded-full">
              Home
            </li>
          </NavLink>
          <NavLink to='/about'>
            <li className="py-1 px-4 hover:transition duration-300 ease-in-out hover:bg-violet-600 hover:text-white hover:active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-slate-300 rounded-full">
              About
            </li>
          </NavLink>
          <NavLink to='/projects'>
            <li className="py-1 px-4 hover:transition duration-300 ease-in-out hover:bg-violet-600 hover:text-white hover:active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-slate-300 rounded-full">
              Projects
            </li>
          </NavLink>
        </ul>
        <button
          aria-label="theme"
          className="py-2 px-3 gap-4 flex border-solid border-2 border-zinc-700 rounded-full bg-slate-800 shadow-lg hover:transition duration-300 ease-in-out hover:bg-violet-600 hover:text-white hover:active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-slate-300 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      </header>
    </>
  );
};

export default Header;
