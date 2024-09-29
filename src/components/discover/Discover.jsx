import React from 'react'
import heroImg from '../../assets/heroImg.png'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import star from '../../assets/star.png'
import times from '../../assets/times.png'
import dot from '../../assets/dot.png'
import arrow from '../../assets/arrow.png'
import fire from '../../assets/fire.png'
import { CiSearch, CiStar } from 'react-icons/ci'

const Discover = () => {
  return (
    <section id='discover' className='flex items-center md:p-14 lg:pt-8 pt-28'>
    <div className='container flex flex-col-reverse items-center justify-between md:flex-row mx-auto p-8 h-full gap-12 overflow-y-hidden'>
        {/* left side  */}
        <div className='md:w-1/2'>
        <button className='text-primary bg-navBg py-1 px-4 rounded self-start'>Tasty Food</button>
        <h1 className='lg:text-[70px] font-black font-secondary text-[25px]'>Cherish <span className='text-primary'>Favorite Food</span> in Town</h1>
        <p className='text-lg font-normal text-para my-4'>We will deliver your food within 30 minutes in your town,If we would fail,we will give the food free.</p>

        <div className='flex flex-col lg:flex-row my-3'>
            <button className='bg-primary text-white justify-center flex items-center py-2 px-3 rounded-[20px] '>Order Your Food
            <CiSearch size={20} className='ml-3 sm:ml-2 font-normal'/> 
            </button>
            <button className='bg-navBg text-black font-medium py-3 px-4 ml-3'><p className='border-b border-b-black'>How to Order</p></button>
        </div>
        {/* p img  */}
        <div className='flex flex-col lg:flex-row items-center space-x-4 max-md:space-x-8'>
        <div className='flex -space-x-4'>
        <img src={p1} width={64} height={64} alt="" className='border-[4px]border-white z-0'/>
        <img src={p2} width={64} height={64} alt="" className='border-[4px]border-white z-10'/>
        <img src={p3} width={64} height={64} alt="" className='border-[4px]border-white z-20'/>
        </div>

        <div>
            <p className='text-black font-semibold text-[17px] my-2'>Our Happy Customer</p>
            <div>
            <p className='text-[15px] flex items-center space-x-2'> <img src={star} alt="" /> <span className='text-black font-medium'>4.8</span>&nbsp;(12.5k Reviews)</p>
            </div>
        </div>
        </div>
        </div>
        {/* right side */}
        <div className='relative'>
        <img src={times} alt="" className='absolute top-10 max-sm:-left-3 max-sm:-top-3 max-sm:-right-8'/>
        <img src={fire} alt="" className='absolute top-14 right-14'/>
        <img src={arrow} className='absolute -right-6 top-40 max-sm:-right-6 max-sm:top-20'/>
        <img src={heroImg} alt="" />
        <img src={dot} className='absolute -right-6 bottom-20' alt="" />
        <img src={dot} className='absolute bottom-0 left-8' alt="" />

        </div>
    </div>
    </section>
  )
}

export default Discover