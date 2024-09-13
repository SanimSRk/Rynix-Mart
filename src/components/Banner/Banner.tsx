'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import images1 from '..//../image/depositphoto.jpg'
import images2 from '..//../image/product.webp'
import images3 from '../../image/Shop.jpg'
import images4 from '../../image/banners.jpg'
import images5 from '../../image/bannerem.jpg'
import Image from 'next/image';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
     <div>
     <Image className='w-full rounded-lg  object-center lg:h-[490px]' width={400} height={400} src={images1} alt="" />
     </div>
        </SwiperSlide>
      
        <SwiperSlide>
     <div>
     <Image className='w-full rounded-lg  object-center lg:h-[490px]' width={400} height={400} src={images2} alt="" />
     </div>
        </SwiperSlide>
      
        <SwiperSlide>
     <div>
     <Image className='w-full rounded-lg  object-center lg:h-[490px]' width={400} height={400} src={images3} alt="" />
     </div>
        </SwiperSlide>
      
        <SwiperSlide>
     <div>
     <Image className='w-full rounded-lg  object-center lg:h-[490px]' width={400} height={400} src={images4} alt="" />
     </div>
        </SwiperSlide>
      
        <SwiperSlide>
     <div>
     <Image className='w-full rounded-lg  object-center lg:h-[490px]' width={400} height={400} src={images5} alt="" />
     </div>
        </SwiperSlide>
      
      </Swiper>
    </>
)}

export default Banner
