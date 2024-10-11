import React from 'react'
import BandgeCard from './BandgeCard'
import Card from './Card'
import data from "../jsondata/data.json"
import PopUpComponent from './PopUpComponent'
import { useState } from 'react'
import '../style/style.css'

function BodyContain() {

    const [dataCard, setDataCard] = useState(data.Data)
    
    function catchDataFromCard(data){
        console.log("Data from child component: ", data)
        setDataCard([...dataCard, {id : dataCard.length + 1, ...data}])
    }

    function getCardId(id){
        console.log("Get ID from Card: ", id)
        const findDataCard = dataCard.find((fdc)=>{
            return (
                fdc.id == id           // Remove card in dataCard by id
            )
        })
        console.log(findDataCard)
        // setDataCard(findDataCard);
        //console.log("Data after remove: ", dataCard)
    }
    
    const [alert, setAlert] = useState(false);
    function handleToggle(){
        setAlert(!alert);
        console.log("Alert: ", alert)
    }

  return (
    <>
        <div className='project w-[60%] px-4 p-4 rounded-t-3xl h-[555px]'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold cursor-pointer' onClick={handleToggle}>Projects</h1>
                <div className='btn-add-project'>
                    <PopUpComponent catchDataFromCard={catchDataFromCard} />
                </div>
            </div>
            <BandgeCard/>
            {!alert && 
                <>
                    <div className='mt-8 w-full h-[250px] grid gap-6 grid-cols-3'>
                        {dataCard.map((data, index) => {
                            const {name, company, type, startDate, endDate, detail, id} = data;
                            return (
                                <React.Fragment key={index}>
                                    <Card name={name} company={company} type={type} date={startDate} endDate={endDate} detail={detail} id={id} getCardId={getCardId} />
                                </React.Fragment>
                            );
                        })}
                    </div>
                </>
            }       
        </div>
    </>
)}

export default BodyContain