import React,{useEffect, useState} from 'react'
import Project from './Project'
import { assets, projectsData } from '../assets/assets'

function Projects() {
    const [data,setData] = useState(projectsData)
    const [currInd,setCurrInd] = useState(0)
    const [cardsToShow,setCardsToShow] = useState(1)

    useEffect(()=>{
        const updateCardsToShow = ()=>{
            if(window.innerWidth >= 1024){
                setCardsToShow(data.length)
            }
            else{
                setCardsToShow(1)
            }
        };
            updateCardsToShow();

            window.addEventListener('resize',updateCardsToShow)
            return ()=> window.removeEventListener('resize',updateCardsToShow)
    },[])

    const nextIndex =()=>{
        setCurrInd(prev => (prev+1) % data.length)
    } 
    const prevIndex = ()=>{
        setCurrInd(prev => prev === 0 ? data.length-1 : prev-1)
    }
    
  return (
    <div id='Projects' className='h-screen w-full gap-10 flex flex-col'>
        <div className='mt-5 w-full text-center'>
            <h1 className='text-3xl font-semibold mb-2'>Projects <span className='font-extralight underline '>Completed</span></h1>
            <h1 className='capitalize text-sm'>Crafting Spaces, building legacies-Explore <br /> Our portfolio</h1>
        </div>
        <div className='mr-20 flex justify-end gap-4'>
            <button onClick={prevIndex} className='h-6 w-10 border-2 cursor-pointer bg-zinc-300 hover:bg-zinc-50 border-zinc-200 active:border-zinc-500 p-0.5'>
                <img className='h-full w-full ' src={assets.left_arrow} alt="" />
            </button>
            <button onClick={nextIndex} className='h-6 w-10 border-2 cursor-pointer bg-zinc-300 hover:bg-zinc-50 active:border-zinc-500 p-0.5 border-zinc-200'>
                <img className='h-full w-full' src={assets.right_arrow} alt="" />
            </button>
        </div>
        <div className="overflow-hidden">
        <div className='pt-6 pl-15 md:pl-20 w-full flex gap-7 transition-transform duration-500 ease-in-out flex-shrink-0'
        style={{transform:`translateX(-${(currInd*100)/cardsToShow}%)`}}
        >
            {
                data.map((item,index)=>{
                    return <Project key={index} data={item}/>
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Projects
