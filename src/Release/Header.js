import React from 'react'
function Header() {
  return (
    <div className=' relative' >
      <img src={process.env.PUBLIC_URL+'/images/release/header_bg.png'} alt=""  className='w-full object-cover' data-aos="fade" data-aos-duration="1000"/>
      <div className=' absolute top-[18%] left-1/2 -translate-x-1/2  w-1/2'>
        <img src={process.env.PUBLIC_URL+'/images/release/header_title.png'} alt="" className='w-full' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"/>
      </div>
      <div className=' absolute bottom-[8%] left-12  w-1/2 z-10'>
        <img src={process.env.PUBLIC_URL+'/images/release/header_subtitle.png'} alt="" className='w-full' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"/>
      </div>

    </div>
  )
}

export default Header