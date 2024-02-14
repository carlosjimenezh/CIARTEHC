// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import BANNERS from '../data/banners.json'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default () => {
  return (
    <>
      <section id='productos'>
        <h1 className='text-center p-4'>Productos</h1>
        <Swiper
        // install Swiper modules
        id="banner-swiper"
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 3000 }}
        loop='true'
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
        { BANNERS.map( ({ id, imagen, titulo } ) => (
          <SwiperSlide className='back-img grid min-h-full place-items-center' style={{ backgroundImage: `url(${imagen})` }} key={id}>
            <strong className='text-4xl text-white'>
              {titulo}
            </strong>
          </SwiperSlide>
          ))
        }
        </Swiper>
      </section>
    </>
  )
}
