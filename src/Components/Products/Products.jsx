
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 12,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 22,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 23,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 24,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 25,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you </p>
          <h1 data-aos="fade-up" className="font-bold text-3xl">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
      </div>
      <div  className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-1">
          {ProductsData.map((data,index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={data.id} className="space-y-3 ">
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[180px] object-cover rounded-md"
              />
              <h3 className="font-semibold">{data.title}</h3>
              <p className="text-sm text-gray-600">{data.color}</p>
              <div className="flex items-center gap-1">
                <FaStar style={{ color: "yellow" }} />
                <span>{data.rating}</span>
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
  );
};

export default Products;
