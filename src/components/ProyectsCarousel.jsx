// import Swiper core and required modules
import {  Navigation, A11y, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export default () => {
  return (
    <>
    <Swiper
      // install Swiper modules
      id='sections-swiper'
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop='true'
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='back-img rounded-md content-end cursor-pointer' style={{ backgroundImage: 'url("banner/img1.jpg")' }}>
        <div className='bg-white p-4 h-40 opacity-85 rounded-b-md'>
            <strong>
                Organigrama
            </strong>
        </div>
      </SwiperSlide>
      <SwiperSlide className='back-img rounded-md content-end cursor-pointer' style={{ backgroundImage: 'url("banner/img2.jpg")' }}>
        <div className='bg-white p-4 h-40 opacity-85 rounded-b-md'>
            <strong>
                Objetivo
            </strong>
        </div>
      </SwiperSlide>
      <SwiperSlide className='back-img rounded-md content-end cursor-pointer' style={{ backgroundImage: 'url("banner/img3.jpg")' }}>
        <div className='bg-white p-4 h-40 opacity-85 rounded-b-md'>
            <strong>
                Actas
            </strong>
        </div>
      </SwiperSlide>
      <SwiperSlide className='back-img rounded-md content-end cursor-pointer' style={{ backgroundImage: 'url("banner/img2.jpg")' }}>
        <div className='bg-white p-4 h-40 opacity-85 rounded-b-md'>
            <strong>
                Investigadores
            </strong>
        </div>
      </SwiperSlide>
      <SwiperSlide className='back-img rounded-md content-end cursor-pointer' style={{ backgroundImage: 'url("banner/img1.jpg")' }}>
        <div className='bg-white p-4 h-40 opacity-85 rounded-b-md'>
            <strong>
                Lineas de generación y aplicación de conocimiento
            </strong>
        </div>
      </SwiperSlide>
      <SwiperSlide className='back-img rounded-md content-end cursor-pointer' style={{ backgroundImage: 'url("banner/img2.jpg")' }}>
        <div className='bg-white p-4 h-40 opacity-85 rounded-b-md'>
            <strong>
                Cuerpo académico en consolidación reconocido por PRODEP
            </strong>
        </div>
      </SwiperSlide>
      <SwiperSlide className='back-img rounded-md content-end cursor-pointer' style={{ backgroundImage: 'url("banner/img3.jpg")' }}>
        <div className='bg-white p-4 h-40 opacity-85 rounded-b-md'>
            <strong>
                Proyectos de investigación 
            </strong>
        </div>
      </SwiperSlide>
      <SwiperSlide className='back-img rounded-md content-end cursor-pointer' style={{ backgroundImage: 'url("banner/img2.jpg")' }}>
        <div className='bg-white p-4 h-40 opacity-85 rounded-b-md'>
            <strong>
                Proyectos de vinculación 
            </strong>
        </div>
      </SwiperSlide>
      <SwiperSlide className='back-img rounded-md content-end cursor-pointer' style={{ backgroundImage: 'url("banner/img2.jpg")' }}>
        <div className='bg-white p-4 h-40 opacity-85 rounded-b-sm'>
            <strong>
                Publicaciones
            </strong>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}