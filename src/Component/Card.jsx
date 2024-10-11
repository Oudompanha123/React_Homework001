import React from 'react'
import PopUpComponent from './PopUpComponent';
import { AiOutlineEllipsis } from "react-icons/ai";
import { useState } from 'react';

function Card ({date, company, name, type, endDate, detail, id, getCardId}) {

    console.log("Type of card data: ", type)

    const displayColor = (type)=>{
        if(type === "Full Time"){
            return 'bg-pink-200 text-pink-500';
        } else if (type === "Part Time"){
            return 'bg-blue-200 text-blue-500';
        } else if (type === "Freelance"){
            return 'bg-yellow-200 text-yellow-500';
        } else {
            return '';
        }
    }

    function catchId(){
        document.getElementById('my_modal_3').showModal();
        getCardId(id)        
    }

  return (   
    <>
        <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-between mb-4'>
                <p>{date}</p>
                <AiOutlineEllipsis />
            </div>
                <div className='flex flex-col items-start mb-5'>
                    <p className='font-bold text-slate-600 text-left'>{company}</p>
                    <p className='text-2xl font-bold text-slate-600'>{name}</p>
                <div className='flex items-end mt-3'>
                    <button className={`py-1 px-2 rounded-[50px] font-semibold ${displayColor(type)}`}>{type}</button>
                </div>
            </div>
            <hr />
            <div className='flex justify-end my-4'>
                <button className='btn text-white bg-purple-500 p-2 rounded-[50px] font-semibold hover:bg-purple-400' data-modal-target="popup-modal" data-modal-toggle="popup-modal" onClick={catchId}>
                    See Detail
                </button>
                <dialog id="my_modal_3" className={`modal rounded-2xl ${displayColor(type) || ""}`}>
                    <div className="modal-box relative p-5">
                        <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-1 cursor-pointer font-bold " onClick={() => document.getElementById('my_modal_3').close()}>✕</div>
                            <div className='flex flex-col items-start'>
                                <h1 className='text-2xl font-bold'>{company} Company</h1>
                                <p className='text-sm'><span className='font-semibold'>Position: {name}</span></p>
                                <p className='text-sm font-semibold'><span className='font-semibold'>Duration:</span > From {date} to {endDate} </p>
                                <p className='text-sm'><span className='font-semibold'>Description: {detail}</span></p>
                            </div>
                        </div>
                </dialog>
            </div>
        </div>
    </>    
  )
}

export default Card;