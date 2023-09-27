import React, { useState } from "react";
import Calendar from "react-calendar";
import Card from "../Component/card";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../assets/css/MiniCalendar.css";
import Navbar from "../Component/Navbar"
function Calender() {

    const [value, onChange] = useState(new Date());

  return <>

  <div className='flex flex-col w-full'>

  <Navbar/>
  
  <div className="flex flex-col"> 

  
  <div>
      <Card extra="flex w-[360px]  px-10 py-10 h-[350px] flex-col ">
        <Calendar
          onChange={onChange}
          value={value}
          prevLabel={<MdChevronLeft className="ml-1 h-6 w-6 " />}
          nextLabel={<MdChevronRight className="ml-1 h-6 w-6 " />}
          view={"month"}
          />
      </Card>
    </div>


    <div className="flex w-[360px]  h-[420px] flex-col rounded-2xl bg-white">
        <div>

   <h1>Upcoming Events</h1>
   <div className="flex flex-row items-center  gap-2">
    <h1>08:00</h1>
    <div class="w-3/5 rounded-full  dark:bg-gray-700">
  <div class="bg-slate-300 h-[2px] rounded-full"></div>
</div>    </div>
  </div>

  <div>

<h1>Upcoming Events</h1>
<div className="flex flex-row items-center  gap-2">
 <h1>09:00</h1>


<div className="bg-[#A162F7] w-64 px-5 rounded-2xl py-2 text-white font-serif">
<h1 className="text-[14px]">
Drift Series Firs Round
</h1>
<div className="flex items-center justify-between ">

<h1>
JDM
</h1>
<img src="avator.png" alt="avator.png" />
</div>

    </div>  



  </div>
</div>

  
    </div>


          </div>
  </div>
  </>
}
export default Calender