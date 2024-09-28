import React from "react";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import fish from "../../assets/fish.png";
import meat from "../../assets/meat.png";
import fruites from "../../assets/fruites.png";
import diary from "../../assets/diary.png";
import veg from "../../assets/veg.png";
import mango from '../../assets/mango.png'
import grapes from '../../assets/grapes.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Menu = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <section id="menu" className="pt-20">
      <div className="container mx-auto p-8">
        <div className="flex justify-between">
          <div className="mb-8">
            <h2 className="text-lg text-primary font-semibold">OUR MENU</h2>
            <h1 className="md:text-5xl text-3xl text-left font-black font-secondary md:w-[622px] h-10 text-para">
              Take a Look at Our Loveable Food Categories
            </h1>
          </div>
          <div className="hidden lg:flex items-end justify-end space-x-6">
            <div>
              <img src={left} alt="" />
            </div>
            <div>
              <img src={right} alt="" />
            </div>
          </div>
        </div>
        {/* menu  */}
        <div className="p-14 flex justify-evenly max-lg:flex-col max-lg:items-center">
          {/* menu scrollbar  */}
          <div
            className="border w-11/12 md:w-6/12 space-y-8 p-6 overflow-y-auto h-[400px] scrollbar "
          >
            <div className="flex items-center space-x-4 p-3 ">
              <img src={veg} alt="" />
              <p className="text-2xl font-medium">Vegetables</p>
            </div>
            <div className="flex items-center space-x-4 bg-primary p-3 rounded-[50px]">
              <img src={fruites} alt="" />
              <p className="text-2xl font-medium text-white">Fruites</p>
            </div>
            <div className="flex items-center space-x-4 p-3 ">
              <img src={meat} alt="" />
              <p className="text-2xl font-medium">Meat</p>
            </div>
            <div className="flex items-center space-x-4 p-3 ">
              <img src={fish} alt="" />
              <p className="text-2xl font-medium">Fisht & Seafood</p>
            </div>
            <div className="flex items-center space-x-4 p-3 ">
              <img src={diary} alt="" />
              <p className="text-2xl font-medium">Dairy & Eggs</p>
            </div>
          </div>
          {/* Items  */}
          
          <div className=" max-w-full mt-10 p-5 mx-auto lg:w-7/12 ">
          <Slider {...settings}>
            <div>
            <img src={mango} className="max-sm:h-[250px] max-sm:w-[300px]" alt="" />
            </div>     
            <div>
            <img src={mango} alt="" className="max-sm:h-[250px] max-sm:w-[300px]" />
            </div>  
            <div>
            <img  src={mango} alt="" className="max-sm:h-[250px] max-sm:w-[300px]" />
            </div>  
            </Slider>   
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
