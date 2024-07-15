import './Programs.css'
import RightArrow from '../../assets/rightArrow.png'
import { programsData } from '../../data/programsData';


const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore</span>
            <span>Programas</span>
            <span className="stroke-text">Para seu Shape</span>
        </div>

        <div className="program-categories">
           {programsData.map((program, index)=>{
                return (
                <div className="category" key={index}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Ver Mais</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
                )
            })}
        </div>

    </div>
  )
}

export default Programs