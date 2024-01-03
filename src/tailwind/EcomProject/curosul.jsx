import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { EcomFetch } from './EcomFetch';
import Banner2 from './addvertisment';

import { EcomFetch2 } from './EcomFetch2';
import { UnderBanner } from './underbanner';
import Soul, { Curosal } from './curosal2'




export default function CCC() {

 
    return (

      <div>
        
        <div className=' min-h-[80vh] hidden sm:block rounded-lg'>
        
        <CarouselProvider
      className='hidden sm:block h-[200px]'
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={3}
      >
        <Slider className=' relative h-[100vh] mx-auto  '>
          <div className=''>
            <Slide index={0} className=''>
          <img  src={"add3.jpg"} alt=""   className='w-full h-[90vh] rounded-md transform-gpu mx-auto' />
            </Slide>
          <Slide index={1}><img  src={"add4.jpg"}  alt=""   className='w-full h-[90vh] rounded-md transform-gpu mx-auto'  /></Slide>
          <Slide index={2}><img  src={"add6.png"}  alt=""   className='w-full h-[90vh] rounded-md transform-gpu mx-auto'  /></Slide>
          </div>
        </Slider>
        <ButtonBack ><FaLessThan className='absolute top-[55%] left-3 text-3xl bg-[#faf9f9] w-[70px] h-[71px] opacity-60 hover:opacity-40 p-4 rounded-full text-[#323131]' /></ButtonBack>
        <ButtonNext ><FaGreaterThan className='absolute top-[55%] right-3 text-3xl bg-[#faf9f9] w-[70px] h-[71px] opacity-60 hover:opacity-40 p-4 rounded-full text-[#323131]' /></ButtonNext>
      </CarouselProvider>
    
    
      </div>
      <div>
        <Soul/>
      </div>
      <div>
      <EcomFetch/>
      </div>
    
    <Banner2/>
    <EcomFetch2/>
    <UnderBanner/>
      </div>
    );
  
}