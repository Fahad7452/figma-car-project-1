import React from 'react'

function Navbar() {
  return <>

  
  <div className=' w-full bg-white h-[60px] sticky '>
<div className='flex  justify-between px-8 mt-3'>


    <div class="relative  ">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-700 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-44 sm:w-72 p-2 pl-10 text-sm text-gray-900  rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search or type"/>
    </div>
  

  <div className='flex gap-8 items-center'>

  <img className='w-4 h-5' src="notification@2x.png" alt="notification@2x.png" />


  <img className='w-8 h-8 rounded-full' src="portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper@2x.png" alt="logo@2x.png" />

  </div>


  </div>
  
  </div>


  </>
}

export default Navbar