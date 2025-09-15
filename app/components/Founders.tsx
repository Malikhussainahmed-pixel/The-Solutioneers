import { div } from 'framer-motion/client'
import React from 'react'

export default function Founders() {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-orange-500">Founders</span>
          </h2>
         
        </div>

   <div className='container mx-auto '>
    <div className=' grid sm:grid-cols-2  max-w-sm sm:max-w-6xl mt-10 mb-25 mx-auto gap-6  '>
     <div className='bg-amber-400 min-h-150 overflow-hidden rounded-xl'>
      <div className='mt-5'> <img src="/images/abdullah.jpeg"  className='border-3 shadow-md w-75 h-75 sm:w-90 sm:h-90 rounded-full mx-auto' alt="" /></div>
      <div>
        <div className='text-center mt-5'>
          <div><h1 className='font-black text-2xl'>Abdullah Farooq</h1></div>
          <div><p className='font-bold text-lg'>Co-Founder</p></div>
        </div>
        <div className=''>
          <p className='max-w-md text-justify p-5 sm:p-1 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quibusdam ad ipsam, rem molestiae dolore recusandae libero maiores quam quis alias sit exercitationem voluptatum dignissimos ratione expedita hic molestias?</p>
        </div>
      </div>
     </div>
     <div className='bg-blue-500 min-h-150 overflow-hidden rounded-xl'>
      <div className='mt-5'> <img src="/images/hussain.jpg"  className='border-3 shadow-md w-75 h-75 sm:w-90 sm:h-90 rounded-full mx-auto' alt="" /></div>
      <div>
        <div className='text-center mt-5'>
          <div><h1 className='font-black text-2xl'>Malik Hussain Ahmed</h1></div>
          <div><p className='font-bold text-lg'>Co-Founder</p></div>
        </div>
        <div>
          <p className='max-w-md text-justify p-5 sm:p-1 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quibusdam ad ipsam, rem molestiae dolore recusandae libero maiores quam quis alias sit exercitationem voluptatum dignissimos ratione expedita hic molestias?</p>
        </div>
      </div>
     </div>
    </div>
    
    </div> 
    </>
  )
}
