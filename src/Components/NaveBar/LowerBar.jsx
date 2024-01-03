import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
 {
   id: 1,
   name: "Trending Products",
   link: "/#",
 },
 {
   id: 2,
   name: "Best Selling",
   link: "/#",
 },
 {
   id: 3,
   name: "Top Rated",
   link: "/#",
 },
];

const LowerBar = () => {

  
  return (
    <div data-aos="zoom-in" className="flex justify-center">
      <ul className="sm:flex hidden items-center gap-4">
        {Menu.map((data) => (
          <li key={data.id}>
            <NavLink to={data.link}  className="inline-block px-4 hover:text-primary duration-200">{data.name}</NavLink>
          </li>
        ))}
         <li className="group relative cursor-pointer">
            <NavLink to="/" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </NavLink>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id *Math.random}>
                    <NavLink
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
      </ul>
    </div>
  );
};

export default LowerBar;
