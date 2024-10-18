import React from 'react'
import Forward from './Forward'
import Background from './Background'

const App = () => {
  
  return (
   <>
  <div className='w-full min-h-screen bg-zinc-800  px-1 overflow-hidden'>
    <Background />
    <Forward />
  </div>
   </>
  )
}

export default App