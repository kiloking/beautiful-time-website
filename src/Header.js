import React from 'react'
import Footer from './Footer'
function Header() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-8 h-screen  '>
      <div 
        className=' bg-contain bg-no-repeat bg-left-center md:col-span-6    bg-[#EEDCDA]  relative hidden md:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
      >
        <div className=' absolute top-44 right-32 w-2/4' >
          <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='w-full' data-aos="fade-down" data-aos-duration="1500" />
        </div>

      </div>
      <div 
        className='block md:hidden bg-cover bg-no-repeat bg-center w-full  aspect-[9/13] relative '
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg_mb.png'})`}}
      >
          <div className=' absolute bottom-10 left-1/2 -translate-x-1/2' >
            <img src={process.env.PUBLIC_URL+'/images/header_title_mb.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="1500" />
          </div>
          <div className=' absolute top-24 right-5 w-1/2' >
            <img src={process.env.PUBLIC_URL+'/images/header_title2_mb.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="1500" />
          </div>
      </div>
      <div className='md:col-span-2 bg-[#F5BDC2]'>
        <Footer />
      </div>


    </div>
  )
}

export default Header