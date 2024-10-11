import React from 'react'
import { useState } from 'react';
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

function MessageProfile({name, message, img, date, like}) {
  const [likeClick, setLike] = useState(like)
  // console.log("Like: ", like)
  return (
    <>
        <a href="#" class="flex box-border flex-col items-center bg-white shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-[70px] h-[70px] rounded-full ms-3" src={`src/Images/${img}`} alt=""/>
            <div class="flex flex-col justify-between items-start p-4 leading-normal">
              <div className='name flex items-center justify-between'>
                <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <div className='starIcon ms-auto'onClick={() => setLike(!likeClick)}>
                  {likeClick? <MdOutlineStarBorder /> : <MdOutlineStar />}
                </div>
              </div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">{message}</p>
                <div className='flex justify-end ms-auto items-center'>
                  <p className='text-sm'>{date}</p>
                  {/* {like ? <MdOutlineStar /> : <MdOutlineStarBorder />} */}
                </div>
            </div>
        </a>
    </>
  )
}

export default MessageProfile
