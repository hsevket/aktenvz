import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div className=" h-12 rounded-xl w-[1000px] border-gray-200 bg-gray-100 flex flex-row justify-around items-center mt-0">
      <NavLink
        end
        to="/file"
        className={({ isActive }) =>
          " text-gray-500 text-center p-2 h-12 w-64 border-gray-200 rounded-lg shadow-lg  hover:font-bold" +
          (isActive ? " font-bold underline shadow-2xl" : "")
        }
      >
        menu 1
      </NavLink>
      <NavLink
        to="/file/path1"
        className={({ isActive }) =>
          " text-gray-500 text-center p-2 h-12 w-64 border-gray-200 rounded-lg shadow-lg  hover:font-bold" +
          (isActive ? " font-bold underline shadow-2xl" : "")
        }
      >
        menu 2
      </NavLink>
      <NavLink
        to="/file/path2"
        className={({ isActive }) =>
          " text-gray-500 text-center p-2 h-12 w-64 border-gray-200 rounded-lg shadow-lg  hover:font-bold" +
          (isActive ? " font-bold underline shadow-2xl" : "")
        }
      >
        menu 3
      </NavLink>
      <NavLink
        to="/file/path3"
        className={({ isActive }) =>
          " text-gray-500 text-center p-2 h-12 w-64 border-gray-200 rounded-lg shadow-lg  hover:font-bold" +
          (isActive ? " font-bold underline shadow-2xl" : "")
        }
      >
        menu 4
      </NavLink>
    </div>
  );
}
