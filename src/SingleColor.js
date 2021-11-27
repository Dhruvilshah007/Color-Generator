import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

//rgb and weight are coming from color and index is send as prop
const SingleColor = ({ rgb, weight, index,hexColor }) => {
  //for copied to click board alert
  const [alert, setAlert] = useState(false);
  console.log(hexColor)

  //seperated rgb values by ,(comma)
  const bcg = rgb.join(",");
  // console.log(bcg)
  //using function for hex
  const hex=rgbToHex(...rgb)

  const hexValue=`#${hexColor}`

  // when alert changes do this useeffect
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setAlert(false)
    },3000)
    return () =>clearTimeout(timeout)
  },[alert])

  return (
    //white color for last 10 and dark color text for first 10 
    <article className={`color ${index>10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }}
    onClick={()=>{
      setAlert(true)
      navigator.clipboard.writeText(hexValue)
    }}
    >
      <p className="percent-value">{weight}%</p>

      {/*  */}
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>Copied To ClipBoard</p>}
    </article>
  );
};

export default SingleColor;
