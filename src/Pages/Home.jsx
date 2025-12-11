import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination , Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Home.css'
import Nav from '../Component/Nav'
import {Box} from '@mui/material'
const Home = () => {
     const slides = [
        {
            img:'https://cdn.pixabay.com/photo/2015/07/09/19/51/still-life-838329_640.jpg'
        },
         {
            img:'https://cdn.pixabay.com/photo/2017/06/10/12/09/cosmetics-2389775_640.jpg'
        }, 
        {
            img:'https://cdn.pixabay.com/photo/2017/10/22/12/23/perfume-2877688_640.jpg'
        },
     ]
  return (

    <div>
     <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        // backgroundColor:'white',
        backgroundSize: "cover",
        backgroundPosition: "center",
       background: 'linear-gradient (rgba(0,0,0,0.3))'
        
      }}
    >
    <div>

        
      <Swiper 
        modules={[Navigation, Pagination , Autoplay]}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay:4000}}
        loop

       
       >
        

           {slides.map((slide, i ) => (
               <SwiperSlide key={i}  >
                 <div className="slide">
                    <img src={slide.img} alt=""  className='slide-image'/>
                 </div>
                 </SwiperSlide> 
           ))}       
      </Swiper>     
    </div>

    <Nav/>
    </Box>
    </div>
  )
}

export default Home
