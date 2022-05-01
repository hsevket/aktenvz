import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="  h-[calc(screen-2rem)] flex flex-col justify-items-stretch">
      <NavLink
        to="/file"
        style={({ isActive }) =>
          isActive
            ? {
                fontWeight: "bold"
              }
            : {}
        }
        className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-lg text-center border-2 shadow-xl border-gray-200 h-16 my-6 hover:bg-gradient-to-br transition-colors p-4"
      >
        {" "}
        Aktenverzeichnis{" "}
      </NavLink>
      <NavLink
        to="/edit"
        style={({ isActive }) =>
          isActive
            ? {
              fontWeight: "bold"
              }
            : {}
        }
        className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-lg text-center border-2 shadow-md border-gray-200 h-16 my-6 hover:bg-gradient-to-br transition-colors p-4"
      >
        {" "}
        Ausgeliehene Akten{" "}
      </NavLink>
      <NavLink
        to="/log"
        style={({ isActive }) =>
          isActive
            ? {
              fontWeight: "bold"
              }
            : {}
        }
        className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-lg text-center border-2 shadow-md border-gray-200 h-16 my-6 hover:bg-gradient-to-br transition-colors p-4"
      >
        {" "}
        Aktenmeldungen{" "}
      </NavLink>
      <NavLink
        to="/trash"
        style={({ isActive }) =>
          isActive
            ? {
              fontWeight: "bold"
              }
            : {}
        }
        className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-lg text-center border-2 shadow-md border-gray-200 h-16 my-6 hover:bg-gradient-to-br transition-colors p-4"
      >
        {" "}
        Papierkorb{" "}
      </NavLink>

    </nav>
  );
}