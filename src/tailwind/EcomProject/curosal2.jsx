import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";





export default function Soul() {

 
    return (
      <div className='sm:hidden min-h-[80vh] p-3 rounded-lg '>
        <CarouselProvider
      className=' h-[200px]'
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={3}
      >
        <Slider className=' relative h-[100vh] mx-auto  '>
          <div className=''>
            <Slide index={0} className=''>
          <img  src={"mbladd1.jpg"} alt=""   className='w-full h-[67vh] rounded-md transform-gpu mx-auto' /></Slide>
          <Slide index={1}><img  src={"mbladd4.jpeg"}  alt=""   className='w-full h-[67vh] rounded-md transform-gpu mx-auto'  /></Slide>
          <Slide index={2}><img  src={"mbladd5.png"}  alt=""   className='w-full h-[67vh] rounded-md transform-gpu mx-auto'  /></Slide>
          </div>
        </Slider>
        <ButtonBack ><FaLessThan className='absolute top-[45%] left-6 text-3xl bg-[#faf9f9] w-[55px] h-[55px] p-4  text-[#323131] opacity-60 hover:opacity-40 rounded-full' /></ButtonBack>
        <ButtonNext ><FaGreaterThan className='absolute top-[45%] right-6 text-3xl bg-[#faf9f9] w-[55px] h-[55px] p-4 rounded-full opacity-60 hover:opacity-40 text-[#323131]' /></ButtonNext>
      </CarouselProvider>
      </div>
    );
  
}