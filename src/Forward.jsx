import Reac,{useRef} from 'react'
import Card from './Card'

const Forward = () => {
    const ref = useRef(null)
    const data = [
        {
            desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nihil ut commodi. Repudiandae.",
            filesize : "0.4mb",
            close: false,
            tag:{
                isopen : true, tagtitle: "Download Now", tagcolor: "green"
            } 
        },
        {
            desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nihil ut commodi. Repudiandae.",
            filesize : "0.4mb",
            close: false,
            tag:{
                isopen : true, tagtitle: "Download Now", tagcolor: "blue"
            } 
        },
        {
            desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nihil ut commodi. Repudiandae.",
            filesize : "0.4mb",
            close: true,
            tag:{
                isopen : false, tagtitle: "Download Now", tagcolor: "green"
            } 
        }
    ]
    
  return (
    <div ref={ref} className='absolute top-0 left-0 min-h-screen w-full z-10 px-8 py-6 flex gap-5 flex-wrap'>
       {data.map((items,index)=>(
         <Card data={items} reference={ref} key={index} />
       ))}
    </div>
  )
}

export default Forward