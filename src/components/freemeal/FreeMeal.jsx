import React from 'react'
import driver from '../../assets/driver.png'
import emoji from '../../assets/emoji.png'
import cdot from '../../assets/c-dot.png'
import cdot1 from '../../assets/c-dot1.png'

const FreeMeal = () => {
  return (
    <section id='freemeal' className='pt-24 mb-10'>
    <div className='container mx-auto rounded-2xl p-20 bg-[#fff7eb]'>
    <div className='flex flex-col lg:flex-row space-x-3 items-center space-y-10'>
      {/* right section  */}
      <div className='max-w-full lg:w-1/2 p-6 space-y-6 mt-4 relative'>
      <div>
        <h2 className='text-lg font-semibold text-primary mb-4'>Free Meal</h2>
        <h1 className='text-5xl font-black font-secondary text-para leading-[1.25] max-lg:text-[36px]'>Get Your Free Food From KX2 Now!</h1>
      </div>
      <div>
        <p className='text-lg font-medium text-[#333333]'>If you are poor or unable to pay KX2 for food you can get free meal by ordering us.</p>
        <button className='bg-primary text-white py-3 px-4 text-lg font-medium mt-4 rounded-3xl'>Get Free Now</button>
      </div>
      <img src={cdot1} className='absolute bottom-12 right-8' />
      </div>
      {/* left section  */}
      <div className='max-w-full lg:w-1/2'>
      <div className='relative'>
      <img src={emoji} className='absolute top-10'/>
      <img src={cdot} className='absolute -top-2 left-20'/>
        <img src={driver}  />
        <img src={cdot} className='absolute bottom-32 right-8' />
      </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default FreeMeal