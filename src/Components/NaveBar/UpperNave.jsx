import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FaSearch , FaShoppingCart} from "react-icons/fa";
import DarkMode from './DarkMode'

const UpperNave = (props) => {

  return (
    <div className="container flex justify-between py-2  bg-primary/40 m-0">
      <div>
        <NavLink to="/home" className='flex justify-between gap-2'>
          <img src={Logo} alt="Logo" className="w-10"/>
          <h2 className="font-bold text-2xl sm:text-3xl">Shopmy</h2>
        </NavLink>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="group relative group  sm:block-middle " >
        <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
        </div>
        <button
              onClick={() => props.handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-1000 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <DarkMode/>
      </div>
    </div>
  );
};

export default UpperNave;
