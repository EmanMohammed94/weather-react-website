import React from 'react'
import FristDay from './FristDay'
import style from './Home.module.css'
import OtherDays from './OtherDays';
import PanelSearch from './PanelSearch';

export default function Home() {
  return (
    <div>
      <div className={`${style.homeContainer}`} >
<div className={`${style.imgContainer}`}>

</div>
<div className={`${style.blackBgContainer}`}>

</div>
<div className={`${style.homeContent}  m-auto `}>

<div className="container mt-5">
<div className={`${style.title} ` }>
<h4 className='text-center text-white'> 3 DAYS WEATHER FORECAST</h4>
</div>
  <div className={`row g-1  mt-5 ${style.row}`}>
    <FristDay/>
<OtherDays/>
  </div>
</div>

 </div>
 
      </div>
      
    </div>
  )
}
