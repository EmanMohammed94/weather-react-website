import React, { useEffect} from 'react'

import { useDispatch, useSelector } from "react-redux";
import {getNewsInfo} from '../store/NewsSlice'
import { Link } from 'react-router-dom';
export default function News() {
    const dispatch=useDispatch();
    const{newsInfoList}=useSelector((state) => state.NewsInfo);
    console.log(newsInfoList)
    useEffect(() => {
  
        dispatch(getNewsInfo())
        
      }, []);
  return (
    <div className='bg-dark'>
      <div className="container py-5">
        {newsInfoList.length>0?  <div className="row g-3">
            {newsInfoList.map((element,index)=> <div key={index} className="col-md-4 ">
               <Link to={element.url} target="_blank">
               <div className='newsContent'>
                    <img src={element.urlToImage} alt="" className='w-100'/>
               
<div className='my-3 px-2'>
<span  style={{color:"gray"}}> {element.description.slice(0,100)} ...</span>
</div>               
                </div>
               </Link>
            </div>)
           }
        </div>:""}
      
      </div>
    </div>
  )
}
