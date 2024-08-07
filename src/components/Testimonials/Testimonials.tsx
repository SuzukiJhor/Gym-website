import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import RightArrow from '../../assets/rightArrow.png'
import { useState } from 'react';
import {motion} from 'framer-motion'

const Testimonials = () => {
  const [selected , setSelected] = useState(0)
  const DataLength = testimonialsData.length;

  const transition = {type: 'spring', duration: 3};
  return (
    <div className="testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">O que Falam </span>
            <span>Sobre Nós</span>
            <motion.span
              key={selected}
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}} 
              transition={transition}
            >
              {testimonialsData[selected].review}
            </motion.span>
            <span>
              <span style={{color: "var(--orange)"}}>
                {testimonialsData[selected].name}
              </span>

              {""} - {testimonialsData[selected].status}
            </span>
        </div>

        <div className="right-t">
        <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{...transition, duration: 2}}></motion.div>
          <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{...transition, duration: 2}}></motion.div>
          <motion.img 
            key={selected}
            src={testimonialsData[selected].image} 
            alt="" 
            initial={{opacity: 0, x: 100}} 
            whileInView={{opacity: 1, x: 0}} 
            transition={transition}
            exit={{opacity: 0, x: -100}}
          />

          <div className="arrows">
            <img 
              onClick={()=>{
                selected === 0
                ? setSelected(DataLength - 1)
                : setSelected((prev)=> prev - 1)
              }}
              src={leftArrow} 
              alt="" />

            <img 
              onClick={()=>{
                selected === DataLength - 1
                ? setSelected(0)
                : setSelected((prev)=> prev + 1)
              }}
              src={RightArrow} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Testimonials