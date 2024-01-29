// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      id="banner-swiper"
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop='true'
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='back-img grid min-h-full place-items-center' style={{ backgroundImage: 'url("banner/img1.jpg")' }}>
        <strong className='text-4xl text-white'>
          Próximamente nuevo taller
        </strong>
      </SwiperSlide>
      <SwiperSlide className='back-img' style={{ backgroundImage: 'url("banner/img2.jpg")' }}></SwiperSlide>
      <SwiperSlide className='back-img' style={{ backgroundImage: 'url("banner/img3.jpg")' }}></SwiperSlide>
    </Swiper>
  )
}