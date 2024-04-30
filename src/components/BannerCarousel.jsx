// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import BANNERS from '../data/banners.json'
import React from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const BannerCarousel = () => { 
  return (
    <>
      <section id='productos'>
        <h1 className='text-center p-4'>Productos</h1>
        <div className='max-w-[1350px] m-auto'>
        <Swiper
        // install Swiper modules
        id="banner-swiper"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        loop='true'
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
        { BANNERS.map( ({ id, imagen, titulo } ) => (
          <SwiperSlide className='back-img grid min-h-full place-items-center rounded' style={{ backgroundImage: `url(${imagen})` }} key={id}>
            <strong className='text-4xl text-white mb-20'>
              {titulo}
            </strong>
          </SwiperSlide>
          ))
        }
        </Swiper>
        </div>
      </section>
    </>
  )
}

BannerCarousel.displayName = 'BannerCarousel'

export default BannerCarousel
