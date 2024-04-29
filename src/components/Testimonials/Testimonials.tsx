import React from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData';

const Testimonials = () => {
  return (
    <div className="testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">O que eles Dizem </span>
            <span>Sobre Nós</span>
            <span>
                {testimonialsData[0].review}
                </span>
        </div>

        <div className="right-t">lado Direito</div>
    </div>
  )
}

export default Testimonials