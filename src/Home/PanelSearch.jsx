import React, { useState } from 'react'
import style from './Home.module.css';
import { useDispatch, useSelector } from "react-redux";
import {getWeatherInfo} from '../store/WeatherSlice'
export default function PanelSearch() {
  
const dispatch=useDispatch();
const [city,setCity]=useState("");
  const handleSearch=(e)=>{
    
setCity(e.target.value)
    if(city.length>2){
      dispatch(getWeatherInfo(city))
    }
else{
  dispatch(getWeatherInfo('cairo'))

}
  }
 
  return (
    <>
      <div className={`${style.searchContent}  w-100`}>
<input type="text"  className='w-100  '  value={city} placeholder='Find Your Country ...' onInput={handleSearch}/>
</div>
    </>
  )
}
