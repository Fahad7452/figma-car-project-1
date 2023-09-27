import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return <>
  
  <div className='flex '>


  <div className='w-[40px] sm:w-[248px]   sm:h-full  p-1 sm:p-3 bg-white cursor-pointer sticky'> 
<Link   to="/" className='flex  items-center gap-3  ml-1 sm:ml-7 mt-3'>
    <img className='w-7 h-7' src="logo@2x.png" alt="logo@2x.png" />
    <h1 className='text-2xl font-bold text-[#1F2128] hidden sm:block'>Motiv.</h1>
</Link>


<div className='  ml-1 sm:ml-7 mt-8 flex flex-col gap-12 sm:gap-8'>


<Link to="/" className='flex gap-2 items-center '>
    <img className='w-5 h-5 ' src="dashboard icon@2x.png" alt="dashboard icon@2x.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Dashboard</h1>

    </Link>
    

    <Link to="/Assets" className='flex gap-2 items-center'>
    <img className='w-5 h-5' src="Shape@2x.png" alt="Shape@2x.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Assets</h1>

    </Link>
    
    <Link to="/Sales" className='flex gap-2 items-center'>
    <img className='w-5 h-5' src="Group@2x.png" alt="Group@2x.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Booking</h1>

    </Link>


    <Link   to="/Salescar" className='flex gap-2 items-center'>
    <img className='w-5 h-5' src="bagssss.png" alt="bagssss.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Sell Cars</h1>

    </Link>


    <Link  to="/Sales" className='flex gap-2 items-center'>
    <img className='w-5 h-5' src="shoping.png" alt="shoping.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Buy Cars</h1>

    </Link>

    <Link   to="/Services"   className='flex gap-2 items-center'>
    <img className='w-5 h-5' src="fencing.png" alt="fencing.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Services</h1>

    </Link>


    
    <Link to="/calender" className='flex gap-2 items-center'>
    <img className='w-5 h-5' src="callender.png" alt="callender.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Calender</h1>

    </Link>


    <div className='flex gap-2 items-center'>
    <img className='w-5 h-5' src="message.png" alt="fmessage.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Messages</h1>

    </div>
</div>








<div className='  ml-1 sm:ml-7 mt-8 sm:mt-[27rem] flex flex-col gap-12 sm:gap-6'>



    
    <div className='flex gap-2 items-center'>
    <img className='w-5 h-5' src="Line@2x.png" alt="Line@2x.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Settings</h1>

    </div>


    <div className='flex gap-2 items-center'>
    <img className='w-5 h-5' src="sign-out.png" alt="sign-out.png" />
    <h1 className=' font-medium text-[#5F6165]  hidden sm:block'>Log out</h1>

    </div>


  
</div>
  </div>

  </div>
  
  
  </>
}

export default Sidebar