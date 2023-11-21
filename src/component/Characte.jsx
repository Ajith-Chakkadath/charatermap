import React from 'react'
import "./character.css"

import { useState } from 'react'

import characterimg from "../img/character.jpg"
import spec1 from "../img/spec1.png"
import spec2 from "../img/spec2.png"
import mus1 from "../img/mus1.png"
import mus2 from "../img/mus2.jpg"


export default function Characte() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageMus, setSelectedImageMus] = useState(null);

    const handleImageClick = (imagePath,value) => {
        if (value ==1){
            setSelectedImage(imagePath);
            setSelectedImageMus('')
        }
        else 
        {
            setSelectedImage("");
            setSelectedImageMus(imagePath) 
        }
      

    }

  return (
    <div className='characteralign'>
        <div className='characterImg'>
            <img className='charaimg' src={characterimg} alt="" />
            <img className='effectEye' src={selectedImage} alt="" />
            <img className='effectmus' src={selectedImageMus} alt="" />

        </div>
        <div className='imgAction'>
            <img src={spec1} alt="" onClick={()=> handleImageClick({spec1},1)}/>
            <img src={spec2} alt=""onClick={()=> handleImageClick({spec2},1)} />
            <img src={mus1} alt="" onClick={()=> handleImageClick({mus1},2)} />
            <img src={mus2} alt=""  onClick={()=> handleImageClick({mus2},2)}/>

        </div>

    </div>
  )
}