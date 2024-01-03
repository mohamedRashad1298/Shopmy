import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
 {
   id: 100,
   img: Img1,
   title: "Casual Wear",
   description:
     "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
 },
 {
   id: 201,
   img: Img2,
   title: "Printed shirt",
   description:
     "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
 },
 {
   id: 301,
   img: Img3,
   title: "Women shirt",
   description:
     "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
 },
];

const Best = ({orderHandeler}) => {
  return (
   <div className="mt-14 mb-14">
   <div className="container">
     <div className="text-center mb-10 max-w-[600px] mx-auto ">
       <p data-aos="fade-up" className="text-sm text-primary">Top Rating Products for you </p>
       <h1 data-aos="fade-up" className="font-bold text-3xl">Best Products</h1>
       <p data-aos="fade-up" className="text-xs text-gray-400">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
         asperiores modi Sit asperiores modi
       </p>
     </div>
   </div>
   <div  className="container mt-[100px]">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
       {ProductsData.map((data) => (
         <div 
         key={data.id}
         data-aos="zoom-in"
         className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
         >
           <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                onClick={orderHandeler}
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                >
                  Order Now
                </button>
              </div>
         </div>
       ))}
       </div>
       <div className="flex justify-center">
         <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
           View All Button
         </button>
     </div>
   </div>
 </div>
  )
}

export default Best
