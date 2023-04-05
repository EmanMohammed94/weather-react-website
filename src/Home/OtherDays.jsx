import React,{ useEffect, useState} from 'react'
import style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {getWeatherInfo} from '../store/WeatherSlice';

export default function OtherDays() {
  const dispatch =useDispatch();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = weekDays[new Date().getDay()];

const{forecast}=useSelector((state) => state.weatherInfo.WeatherInfoList);
const{city}=useSelector((state) => state.weatherInfo);
useEffect(() => {
    dispatch(getWeatherInfo(city))
 
  }, []);
 
  return (
    
    <>
    {/* عملت سلايس عشان عاوزه الارراي بتاعي م غير اول يوم  */}
    {forecast!=undefined? forecast.forecastday.slice(1,5).map((day,index)=>
<div key={index} className={`col-md-4 }`}>
<div className={` ${style.otherDaycol}   `}>
  <div className={`text-center  ${style.firstDayTitle}`}>
    {/* لان اليوم اما كان بيجي عند الاحد كان بيحسبه 8 وانا عاوزاه لو العدد وصل 8 يرجع يعد تاني م الاول */}
    <span>{weekDays[new Date(day.date.replace(' ', 'T')).getDay()]}</span>
  </div>
  <div className="px-2 d-flex justify-content-center  flex-column  h-100">
    <div className="d-flex justify-content-between align-items-center flex-column">
      <span className="my-1">
        <img src={day.day.condition.icon} alt="" />
      </span>
      <span className="text-white my-2" style={{ fontSize: "30px" }}>
      {day.day.maxtemp_c}
      </span>
      <span className="my-1">{day.day.mintemp_c}</span>
    </div>
    <div className="my-2 text-center mb-5">
      <span style={{ color: "#009ad8" }}>{day.day.condition.text}</span>
    </div>
  </div>
</div>
</div>
    ) 
    :""}
    
    </>
  )
}
