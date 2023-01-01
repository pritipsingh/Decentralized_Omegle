import React, {useState} from 'react'
import {AiFillVideoCamera} from 'react-icons/ai'
import {profile} from  '../assets'
import { useNavigate } from 'react-router-dom'
import Meeting from '../pages/Meeting'
import { useStateContext } from '../context';

const PostCard = ({owner, description, handleclick}) => {
  const { address, setRoomID } = useStateContext();
 
 console.log("POST", owner)
  const navigate = useNavigate();
  
  const handleStream = async () => {
    
   
    if(address){
   
    navigate('/meeting');
    setRoomID(owner)
    
    }else{
      alert('You need to connect first')
    }
    
   
    
  }
  return (
    
<div className='sm:w-full w-full rounded-[15px] bg-[#1c1c24] cursor-ponter'
    onClick={handleclick}>
      <div>
      <h3 className="font-epilogue font-semibold text-[16px] text-white py-[29px] pl-[19px] text-left leading-[26px] truncate">{description}</h3>

      </div>

      <div className="flex flex-row pl-[19px] items-between mb-[18px]" onClick={handleStream}>
          <img src={profile} alt="tag" className="w-[17px] h-[17px] object-contain"/>
          <p className=" font-epilogue font-normal pl-[12px] text-[12px] text-[#b2b3bd] truncate">by <span className="text-[#b2b3bd]">{owner}</span></p>
          
           <AiFillVideoCamera className = 'w-[27px] pl-[8px] h-[19px] hover:bg-[#808191] rounded-[50px] object-contain text-[#b2b3bd]'
           
           />
          
          
        </div>
  

         
    </div>


    
  )
}

export default PostCard