import React, { useEffect, useState } from 'react'
import logo from '/logo.png'
import active from '/active.png'
import cart from '../../assets/cart.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
const Navbar = () => {
    const [activeSection, setActiveSection] = useState("discover");
    const [isOpen, setIsOpen] = useState(false);
    const [navBg, setNavBg] = useState("");
    const navBarBg = () => {
      if (window.scrollY > 100) {
        setNavBg("navBg");
      } else {
        setNavBg("");
      }
    };
    window.addEventListener("scroll", navBarBg);
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };
      const handleCloseMenu = () => {
        setIsOpen(false);
      };

    const handleScroll = () => {
        const sections = ["discover", "services", "menu", "freemeal"];
        const scrollPosition = window.scrollY + 100;
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + height
            ) {
              setActiveSection(section);
            }
          }
        });
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    

    const handleScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      };
      const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row sm:space-x-6 lg:space-x-12 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li><a href="#discover"
             onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("discover");
          }}
          className={`text-para ${activeSection === "discover" ? "isActive" : ""}`}
            >Discover
                <img className={`${activeSection==='discover'?'block':'hidden'}`} src={active} width={24} height={4.6} alt="active" />
            </a>
                
            </li>
            <li><a href="#services"
             onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("services");
          }}
          className={`text-para ${activeSection === "services" ? "isActive" : ""}`}
            >Services
                <img className={`${activeSection==='services'?'block':'hidden'}`} src={active} width={24} height={4.6} alt="active" />
            </a></li>
            <li><a href="#menu"
            onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("menu");
          }}
          className={`text-para ${activeSection === "menu" ? "isActive" : ""}`}
            >Menu
            <img className={`${activeSection==='menu'?'block':'hidden'}`} src={active} width={24} height={4.6} alt="active" /></a></li>
            <li><a href="#freemeal"
            onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("freemeal");
          }}
          className={`text-para ${activeSection === "freemeal" ? "isActive" : ""}`}
            >Free Meal
            <img className={`${activeSection==='freemeal'?'block':'hidden'}`} src={active} width={24} height={4.6} alt="active" /></a></li>
        </ul>
      )
  return (
    <header className={`fixed bg-${navBg} py-6 px-4 top-0 left-0 right-0 z-50`}>
        <div className='container mx-auto flex justify-between items-center h-full'>
        {/* logo + text */}
        <div className='flex items-center'>
        <a href="#">
            <img src={logo} width={53} height={53} alt="foods logo" />
        </a>
        <h1 className='text-para ml-2 text-[20px] font-semibold'>Foods</h1>
        </div>
        {/* nav Items  */}
        <div className='hidden md:flex justify-center flex-grow'>
        {navLinks}
        </div>


        {/* Buttons  */}

        <div className='flex items-center md:space-x-8 max-md:hidden'>
        <button className='outline-none border-none bg-navBg p-3 rounded'>
            <img src={cart} width={20} alt="" />
        </button>
        <button className='text-white flex items-center space-x-2 outline-none border-none bg-primary rounded-[20px] px-4 py-3'>
            <a href="#" className='text-lg font-normal'>Sign Up</a>
            <FaArrowRightLong size={17}/>
        </button>
        </div>

        

        {isOpen && (
            <nav className="absolute left-0 w-full top-24 px-4 bg-navBg md:hidden">
            <ul
              onClick={handleCloseMenu}
              className="flex flex-col p-4 space-y-3"
            >
              {navLinks.props.children}
              
            </ul>
            <div className='flex flex-row items-center md:space-x-8 max-md:block mb-4'>
        <button className='outline-none border-none bg-navBg p-3 rounded max-md:hidden'>
            <img src={cart} width={20} alt="" />
        </button>
        <button onClick={handleCloseMenu} className='text-white flex items-center space-x-2 outline-none border-none bg-primary rounded-[15px] px-4 py-3'>
            <a href="#" className='text-lg font-normal'>Sign Up</a>
            <FaArrowRightLong size={17}/>
        </button>
        </div>
          </nav>
        )
        }
        {/* toggle menu  */}
        <div className="md:hidden block">
            <button
              onClick={handleToggle}
              className={`text-primary focus:outline-none ${
                isOpen ? "border border-white" : ""
              }`}
            >
              <HiOutlineMenuAlt3 className="size-6" />
            </button>
          </div>

        </div>
    </header>
  )
}

export default Navbar