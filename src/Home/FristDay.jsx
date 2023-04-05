// https://stackabuse.com/how-to-get-name-of-month-and-day-in-javascript/   newDate

import React, { useEffect} from "react";
import style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {getWeatherInfo} from '../store/WeatherSlice'
export default function Weather() {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDay = weekDays[new Date().getDay()];
  const currentMonth = monthNames[new Date().getMonth()];
  const currentDate = new Date().getDate();
const dispatch =useDispatch();
const{current}=useSelector((state) => state.weatherInfo.WeatherInfoList)
const {location}=useSelector((state) => state.weatherInfo.WeatherInfoList)
const{city}=useSelector((state) => state.weatherInfo);
useEffect(() => {
  
    dispatch(getWeatherInfo(city))
    
  }, []);

//   if (isLoading) {
//     return 'loading...'
//   }

//   if (error) {
//     return error
//   }
  return (
    <div className={`col-md-4 `}>
      {current != undefined ? 
        <div className={` ${style.firstDaycol}  `}>
          <div
            className={`d-flex justify-content-between  ${style.firstDayTitle}`}
          >
            <span>{currentDay}</span>
            <span>{currentDate + " " + currentMonth}</span>
          </div>
          <div className="px-2">
            <div className="mt-2">
             {location!=undefined?
              <span>{location.name}</span>
             :""}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white" style={{ fontSize: "70px" }}>
                {current.temp_c}
              </span>
              <span>
                <img src={"https:" +current.condition.icon} alt="" />
              </span>
            </div>
            <div className="my-3">
              <span style={{ color: "#009ad8" }}>
                {current.condition.text}
              </span>
            </div>
            <div className="d-flex justify-content-between ">
              <div style={{ color: "gray" }}>
                <i className="fa-solid fa-umbrella mx-2"></i>
                <span>{current.cloud}%</span>
              </div>
              <div style={{ color: "gray" }}>
                <i className="fa-solid fa-wind"></i>
                <span> {current.wind_kph}km/h</span>
              </div>
              <div style={{ color: "gray" }} className="mb-5 ">
                <i className="fa-solid fa-compass"></i>
                <span>{current.wind_dir}</span>
              </div>
            </div>
          </div>
        </div>
       : 
        ""
      }
    </div>
  );
}
