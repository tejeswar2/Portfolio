
import React from 'react'
import './intro.css'
import resume from '../Resume/Tejeswar_Resume.pdf';
import  webdev from '../../assets/webpng.avif';



export const Intro = () => {

  const alert=()=> {
    window.alert('cv download')
    
  }
  return (
    <section id='intro'>
    <div className='introcontent'>
       <span className='hello'>Hello,</span>
       <span className='introtext'>I'am <span className='introname'>Tejeswar.</span>
       <br/>
       <p className='intropara'>Skilled web developer proficient in designing and <br />maintainig web sites using MERN stack.</p>
       </span>
      
    
      <a href={resume} download>
      <button className='btn' type='button' onClick={alert}>
        Download CV</button>
        </a>

        <img src={webdev} alt="webimg" />

    

      
      

    </div>
    </section>
  )
}

