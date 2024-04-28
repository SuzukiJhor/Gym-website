import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData';


const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore</span>
            <span>Programas</span>
            <span className="stroke-text">Para seu Shape</span>
        </div>

        <div className="program-categories"></div>

    </div>
  )
}

export default Programs