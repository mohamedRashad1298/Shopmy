import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import Best from "../Components/BestProducts/Best";
import Banner from "../Components/Banner/Banner";
import Email from "../Components/Email/Email";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer/Footer";
import Popup from "../Components/Popup/Popup";
import { useState } from "react";

const HomePage = () => {

  const [orderPopup,setOrderPopup]=useState(false)

  const orderHandeler = ()=>{
    setOrderPopup(true)
  }

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      <Hero orderHandeler={orderHandeler} />
      <Products />
      <Best orderHandeler={orderHandeler} />
      <Banner />
      <Email />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
