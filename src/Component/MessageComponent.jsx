import { data } from 'autoprefixer'
import React from 'react'
import MessageProfile from './MessageProfile' 
import Message from "../jsondata/data.json"

function MessageComponent() {
    // console.log(Message.Message)
  return (
    <div className='w-[40%] h-auto rounded-2xl'>
        <h1 className='font-bold text-left ms-10'>client Message</h1>
        <div className='w-full mt-5 h-[510px] overflow-y-scroll'>
            {Message.Message.map((data, index)=>(
                //console.log(data)
                <div key={index}>
                    <MessageProfile name={data.name} message={data.message} img={data.img} date={data.date} like={data.like}/>
                </div> 
            ))}
        </div>
    </div>
  )
}

export default MessageComponent