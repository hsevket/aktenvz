import { NavLink } from "react-router-dom";


export default function 
() {
  return (
    <div className=" h-16 w-full bg-gray-200 flex flex-row justify-around items-center mt-0">
        <NavLink to="/" 
        style={({ isActive }) =>
        isActive
          ? {
              fontWeight: "bold",
              textDecoration: "underline"
            
            }
          : {}
      }
            className=" text-gray-500 text-center h-12 w-64 border-gray-200 rounded-lg shadow-lg hover:font-bold"
        >
            menu 1
        </NavLink>
        <NavLink to="/edit" 
        style={({ isActive }) =>
        isActive
          ? {
              fontWeight: "bold",
              textDecoration: "underline"
            
            }
          : {}
      }
            className=" h-16 w-16 border-gray-200 rounded-lg shadow-lg hover:font-bold"
        >
            menu 2
        </NavLink>
        <NavLink to="/path1" 
        style={({ isActive }) =>
        isActive
          ? {
              fontWeight: "bold",
              textDecoration: "underline"
            
            }
          : {}
      }
            className=" h-16 w-16 border-gray-200 rounded-lg shadow-lg hover:font-bold"
        >
            menu 3
        </NavLink>
        <NavLink to="/path2" 
        style={({ isActive }) =>
        isActive
          ? {
              fontWeight: "bold",
              textDecoration: "underline"
            
            }
          : {}
      }
            className=" h-16 w-16 border-gray-200 rounded-lg shadow-lg hover:font-bold"
        >
            menu 4
        </NavLink>
    </div>
  )
}
