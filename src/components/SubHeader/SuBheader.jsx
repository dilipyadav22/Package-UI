import { NavLink } from "react-router-dom";
import { FaBoxes, FaTruckMoving, FaThLarge } from "react-icons/fa";
import{motion} from "motion/react"

const tabs = [
  { name: "PRODUCTS", icon: <FaBoxes />, path: "/" },
  { name: "CONTAINERS & TRUCKS", icon: <FaTruckMoving />, path: "/containers" },
  { name: "STUFFING RESULT", icon: <FaThLarge />, path: "/results" },
];

const SubHeader=()=> {
  return (
    <motion.div 
      animate={{
                scale:[0,1],
                rotate:[0,,0],
                 }}
                transition={{duration:4}}
    className="w-full bg-red-50 shadow-2xl">
      <h2 className="text-center text-xl sm:text-2xl font-semibold py-4 px-2">
        Load & Stuffing Calculation
      </h2>

      <div className="overflow-x-hidden">
        <div className="flex justify-start sm:justify-center border-b relative w-max sm:w-full px-2 sm:px-0">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-300
                ${isActive ? "bg-gray-300 rounded-xl" : "text-black hover:text-blue-500"}`
              }
            >
              <span className="text-lg sm:text-xl">{tab.icon}</span>
              <span>{tab.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default SubHeader;
