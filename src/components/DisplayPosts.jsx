import React from 'react'
import { useNavigate } from 'react-router-dom'
import {loader} from '../assets'
import Meeting from '../pages/Meeting'
import PostCard from './PostCard'
import { useStateContext } from '../context';

const DisplayPosts = ({title, isLoading, posts}) => {
 
  // console.log(posts.owner)
  // setRoomID(posts.owner)
  const navigate = useNavigate();
  const handleNavigate = (posts) => {
    navigate(`/posts-details/${posts.title}`, { state: campaign });
    
  }
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({posts.length})</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
  {isLoading && (
    <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
  )}

  {!isLoading && posts.length === 0 && (
    <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
      You have not created any post yet
    </p>
  )}

  {!isLoading && posts.length > 0 && posts.map((posts) =><PostCard 
    key={posts.id}
    {...posts}
    handleClick={() => handleNavigate(posts)}
  />
    
  )}
</div>
    </div>
  )
}

export default DisplayPosts