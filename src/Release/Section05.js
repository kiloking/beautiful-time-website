import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section05() {
  const imgs =[
    {image:"section05_p01.png"},
    {image:"section05_p02.png"},
  ]
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >

        <img src={process.env.PUBLIC_URL+'/images/release/section05_c02.png'} alt="" className='max-w-full w-[12%] absolute bottom-0' />
          
        <div className='flex gap-20 flex-col md:flex-row justify-between items-center w-12/12 mx-auto py-10 md:py-20 relative '>

          <div className='w-10/12 mx-auto md:w-7/12 order-1 md:order-2  relative'>
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
            <img src={process.env.PUBLIC_URL+'/images/release/section05_c01.png'} alt="" className='max-w-full w-[12%] absolute -top-10 -left-10 z-10' />
          </div>
          <div className='md:w-5/12 relative  flex flex-col justify-center items-center  p-10 '>
            <img src={process.env.PUBLIC_URL+'/images/release/section05_title.png'} alt="" className='max-w-full  mb-6  ' data-aos="fade" data-aos-duration="1000"/>

          </div>

        </div>

    </div>
  )
}

export default Section05