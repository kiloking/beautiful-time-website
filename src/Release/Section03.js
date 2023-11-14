import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section03() {
  const imgs =[
    {image:"section03_p01.png"},
    {image:"section03_p02.png"},
    {image:"section03_p03.png"},
    {image:"section03_p04.png"},
  ]
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >
        <div className='flex  flex-col md:flex-row justify-between items-center w-12/12 mx-auto py-10 md:py-20 h-full '>
          <div className='w-10/12 mx-auto md:w-5/12 order-1 md:order-2'>
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
          <div className='w-full md:w-7/12 relative flex flex-col items-center justify-centeritem  h-full '>
            <div className='p-10 md:p-24' data-aos="fade" data-aos-duration="1000">
              <img src={process.env.PUBLIC_URL+'/images/release/section03_title.png'} alt="" className='max-w-full  ' />
            </div>

            <div className=' absolute -bottom-28 left-0 w-full h-full' data-aos="fade" data-aos-duration="1000">
              <img src={process.env.PUBLIC_URL+'/images/release/section03_c01.png'} alt="" className='max-w-full w-[20%] absolute bottom-0  left-1/2  -translate-x-1/2  ' />
              <img src={process.env.PUBLIC_URL+'/images/release/section_c01.png'} alt="" className='max-w-full w-[5%] absolute bottom-5 left-12  ' />
              <img src={process.env.PUBLIC_URL+'/images/release/section_c01.png'} alt="" className='max-w-full w-[7%] absolute bottom-24 right-14  ' />
            </div>
          </div>
        </div>

    </div>
  )
}

export default Section03