import React from 'react'
import chef from '../../assets/chef.png'
import onion from '../../assets/onion.png'
import onion1 from '../../assets/onion1.png'
import leaf1 from '../../assets/leaf1.png'
import leaf from '../../assets/leaf.png'
import garlic from '../../assets/garlic.png'
import card from '../../assets/card.png'
import dot from '../../assets/dot.png'
import cdot1 from '../../assets/c-dot1.png'
import p1 from '../../assets/p1.png'
import star from '../../assets/star.png'
import star1 from '../../assets/star1.png'

const Serve = () => {
  return (
    <section className='pt-10'>
    <div className='container   mx-auto flex flex-col lg:flex-row justify-center items-center p-10 space-x-20'>
        {/* left images */}
        <div className=' max-w-full lg:w-1/2 relative'>
        <img src={dot}  className='absolute top-10 left-36'/>
        <img src={onion1}  className='absolute top-16'/>
        <img src={onion} className='absolute top-16 left-8'/>
        <img src={garlic} className='absolute top-52 left-6 max-sm:left-0'/>
        <img src={dot} className='absolute top-64 right-6'/>
        <img src={chef} className='h-[530px] w-[600px]'/>
        <img src={leaf1}  className='absolute right-12 top-4'/>
        <img src={leaf}  className='absolute right-0 top-8'/>
        <img src={cdot1}  className='absolute bottom-24 left-8'/>
        <img src={card}  className='absolute -right-32 -bottom-48'/>
        </div>
        {/* right content  */}
        <div className='max-w-full lg:w-1/2 max-lg:mt-32'>
        <div className='mb-14 space-y-3'>
            <h2 className='text-lg font-semibold text-primary'>WHAT THEY SAY</h2>
            <h1 className='text-5xl leading-[1.25] text-para font-secondary font-black'>What Our Customers
            Say About Us</h1>
            <p className='text-xl text-[#333333] font-medium'>“Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you”.</p>
        </div>
        <div className='flex items-center space-x-3'>
            <div>
                <img src={p1} alt="" />
            </div>
            <div>
                <p className='text-xl text-black font-medium'>Theresa Jordan</p>
                <p className='text-[#828282] font-medium'>Food Enthusiast</p>
            </div>
           
        </div>
        <div className='flex items-center mt-4 space-x-2'>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star1} />
                <div>
                    <p className='text-black text-[15px] font-medium'>4.8</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Serve