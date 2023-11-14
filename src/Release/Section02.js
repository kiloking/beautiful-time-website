import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section02() {
  const imgs =[
    {image:"section02_p01.png"},
    {image:"section02_p02.png"},
    {image:"section02_p03.png"},
    {image:"section02_p04.png"},
  ]
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >
        <div className='flex gap-20 flex-col md:flex-row justify-between items-center w-12/12 mx-auto py-10 md:py-20 '>
          <div className='w-10/12 mx-auto md:w-7/12 order-1 md:order-2 '>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }} 
              modules={[Pagination,Autoplay]}
              autoplay={{delay:1800}}
              centeredSlides={true}
              className='w-full'
            >
              {
                imgs.map((item,index)=>{
                  return(
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/release/'+ item.image} alt="" className='w-full' /></SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
          <div className='w-1/2 md:w-1/3 relative  flex flex-col space-y-4 md:p-14 '>
            <img src={process.env.PUBLIC_URL+'/images/release/section02_title.png'} alt="" className='max-w-full md"w-[70%] mb-6  ' data-aos="fade" data-aos-duration="1000"/>
            <div className=' absolute top-0 left-0 w-full h-full '>
              <img src={process.env.PUBLIC_URL+'/images/release/section_c01.png'} alt="" className='max-w-full w-[20%] md:w-[12%] absolute bottom-0 right-1  md:right-1/3   ' />
              <img src={process.env.PUBLIC_URL+'/images/release/section_c01.png'} alt="" className='max-w-full w-[20%] md:w-[5%] absolute top-1/3   left-1  md:left-1  ' />
              <img src={process.env.PUBLIC_URL+'/images/release/section_c01.png'} alt="" className='max-w-full w-[20%] md:w-[7%] absolute top-12    right-1  md:right-10  ' />
            </div>
          </div>
        </div>

    </div>
  )
}

export default Section02