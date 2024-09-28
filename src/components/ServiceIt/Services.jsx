import React from 'react'
import ydot from '../../assets/y-dot.png'
import dot from '../../assets/dot.png'
import wiredUp from '../../assets/wire.png'
import orderFood from '../../assets/orderFood.png'
import delivery from '../../assets/delivery.png'
import waiters from '../../assets/waiters.png'
const Services = () => {
  const serviceArr = [
    {
      img:orderFood,
      title:'Easy To Order',
      message:'You only need a few steps in ordering food'
    },
    {
      img:delivery,
      title:'Fastest Delivery',
      message:'Delivery that is always ontime even faster'
    },
    {
      img:waiters,
      title:'Best Quality',
      message:'Not only fast for us quality is also number one'
    },
  ]

  console.log(serviceArr)

  return (
    <section id='services' className='pt-24'>
    <div className='container flex justify-center items-center'>
    <div className='flex justify-between w-10/12 items-center'>
      <img src={dot} alt="" />
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-lg text-primary font-semibold text-center'>WHAT WE SERVE</h2>
        <h1 className='font-secondary text-5xl font-black text-para text-center my-6 sm:w-96'>Why You Should 
        Choose KX2</h1>
      </div>
      <img src={ydot} alt="" />
    </div>
    
    {/* Service Content */}
    
    </div>
    <div className='flex justify-center space-x-12 my-8 max-lg:flex-wrap relative'>
    <img src={wiredUp} alt="" className='hidden lg:block absolute top-12 z-0' width={780}/>
{serviceArr.map((service,index)=>{
  const {img,title,message} = service
  return(
    <div key={index} className='z-10 w-96 flex flex-col items-center'>
    <div className='flex justify-center'>
        <img width={200} src={img} alt="" />
      </div>
      <div className=''>
        <h1 className='text-center text-[28px] font-bold text-black'>{title}</h1>
        <p className='text-center text-lg font-medium text-[#333333] w-64 '>{message}</p>
      </div>
    </div>
  )
})}
       
    </div>
    </section>
  )
}

export default Services