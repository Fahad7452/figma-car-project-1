import React from 'react'
import Barchat from './Barchat'
import Navbar from './Navbar'
function Dashboard() {
  return <>
  <div className='flex  w-full flex-col bg-[#F5F5F5]'> 
 
<Navbar/>

  <div className='flex flex-row gap-2 sm:gap-16 mt-5 justify-center flex-wrap cursor-pointer'>

 
  <div className='w-[272px] h-[278px] flex flex-col gap-5 items-center bg-[#A162F7] rounded-xl'>

    <img className='w-8 h-8 mt-8' src="Component 1.png" alt="Component 1.png" />
    <h1 className=' font-medium  text-xl text-white'>Energy</h1>

    <div className="radial-progress text-primary-content" style={{"--value":85,"--size": "6rem"}}>85%</div>    
  </div>

  <div className='w-[272px] h-[278px] flex flex-col gap-5 items-center bg-[#FFFFFF] rounded-xl'>

    <img className='w-8 h-8 mt-8' src="Frame 15.png" alt="Component 1.png" />
    <h1 className=' font-medium  text-xl text-black'>Range</h1>

    <div className="radial-progress text-[#FF7E86]" style={{"--value":55,"--size": "6rem"}}>157k%</div>    
  </div>

  <div className='w-[272px] h-[278px] flex flex-col gap-5 items-center bg-[#FFFFFF] rounded-xl'>

    <img className='w-8 h-8 mt-8' src="Frame 17.png" alt="Component 1.png" />
    <h1 className=' font-medium  text-xl text-black'>Break fluid</h1>

    <div className="radial-progress text-[#A162F7]" style={{"--value":99,"--size": "6rem"}}>99%</div>    
  </div>


  <div className='w-[272px] h-[278px] flex flex-col gap-5 items-center bg-[#FFFFFF] rounded-xl'>

    <img className='w-8 h-8 mt-8' src="Frame 16.png" alt="Frame 171.png" />
    <h1 className=' font-medium  text-xl text-black'>Tire Wear</h1>

    <div className="radial-progress text-[#F6CC0D]" style={{"--value":75,"--size": "6rem"}}>75%</div>    
  </div>
  </div>
  <Barchat/>

  <div className='flex flex-row gap-2 sm:gap-20 mt-5  justify-center flex-wrap cursor-pointer mb-6'>

<div className=' sm:w-[372px] h-[236px] bg-[#E1DFA4] rounded-xl  cursor-pointer '>
  <div className='flex mt-4 gap-3  ml-5'>
<img className='ml-5  ' src="Vector.png" alt="Vector.png" />
<h1 className='text-black font-semibold'>64% Recommend</h1>

  </div>
<img className='ml-8 mt-2 sm:w-auto w-60' src="car.png" alt="car.png" />
<h1 className='text-slate-800 text-xl mt-3 ml-8 font-bold'>Mini Cooper</h1>
<img className='ml-8  mt-2' src="bottom (1).png" alt="Vector.png" />

</div>


<div className=' sm:w-[372px] h-[236px] bg-[#E3ECF1] rounded-xl  cursor-pointer '>
  <div className='flex mt-4 gap-3  ml-5'>
<img className='ml-5 ' src="Vector.png" alt="Vector.png" />
<h1 className='text-black font-semibold'>74% Recommend</h1>

  </div>
<img className='ml-8 mt-2 sm:w-auto w-60' src="maruti-suzuki-suzuki-swift-car-suzuki-9c5818c39cb279f9dc7f844d7769288f.png" alt="maruti-suzuki-suzuki-swift-car-suzuki-9c5818c39cb279f9dc7f844d7769288f.png" />
<h1 className='text-slate-800 text-xl mt-3 ml-8 font-bold'>Porsche 911 Carrera</h1>
<img className='ml-8 mt-2' src="bottom (1).png" alt="Vector.png" />

</div>


<div className=' sm:w-[372px] h-[236px] bg-[#F4E3E5] rounded-xl  cursor-pointer '>
  <div className='flex mt-4 gap-3  ml-5'>
<img className='ml-5 ' src="Vector.png" alt="Vector.png" />
<h1 className='text-black font-semibold'>64% Recommend</h1>

  </div>
<img className='ml-8 mt-2 sm:w-auto w-60' src="mini-countryman-car-bmw-mini-cooper-mini-406b2a24c59d99a8096f336f22982573.png" alt="mini-countryman-car-bmw-mini-cooper-mini-406b2a24c59d99a8096f336f22982573.png" />
<h1 className='text-slate-800 text-xl mt-3 ml-8 font-bold'>Porsche 911 Carrera</h1>
<img className='ml-8 mt-2' src="bottom (1).png" alt="Vector.png" />

</div>
</div>




  </div>
  </>
}

export default Dashboard