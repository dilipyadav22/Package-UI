import { NavLink } from 'react-router-dom';
import {motion} from "motion/react"
const Header = () => {
  return (
    <motion.header
    // animate={{ rotateX:40}}
    initial={{x:-1000}}
    animate={{x:0,rotateX:40,scale:[0.3,1]}}
    transition={{duration:3, ease:"easeOut"}}
     className="bg-[#D29F90] shadow-4xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
      <div className="text-xl sm:text-2xl font-bold">📦 Packing UI</div>

      <nav className=" text-shadow-cyan-600 font-medium flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm sm:text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-cyan-200 font-semibold" : "text-gray-500 hover:text-black"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/containers"
          className={({ isActive }) =>
            isActive ? "text-cyan-200 font-semibold" : "text-gray-500 hover:text-black"
          }
        >
          Containers & Trucks
        </NavLink>
        <NavLink
          to="/results"
          className={({ isActive }) =>
            isActive ? "text-cyan-200 font-semibold" : "text-gray-500 hover:text-black"
          }
        >
          Stuffing Result
        </NavLink>
      </nav>
    </motion.header>
  );
};

export default Header;
