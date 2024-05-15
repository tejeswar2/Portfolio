
import React from 'react'
import './skill.css'
import Webdesign from '../../assets/website-design.png'

export const Skill = () => {
  return (
   <section id='skills'>
     <span className='skilltitle'>What I do</span>
      <span className='skilldesc'>I am a passionate web designer creating user friendly web sites, I have strong understanding in javascript and can make the design of pages highly interactive and responsive</span>


         <div className='skillbar'>
            <img className='skillbarimg' src={Webdesign} alt='webdesign'></img>
             <div className='skillbartext'>
              <h2>Web Design</h2>
                <p></p>
             </div>

         </div>
        
   </section>
  )
}
