import React, { useEffect } from 'react'
import Navbar from './Navbar'

import {
    Chart,
    initTE,
  } from "tw-elements";
  
  initTE({ Chart });
function Salescar() {

useEffect(()=>{


      
      const dataBarCustomOptions = {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Traffic",
              data: [30, 15, 62, 65, 61, 6],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
      };
      
      const optionsBarCustomOptions = {
        options: {
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "green",
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: "#4285F4",
              },
            },
            y: {
              ticks: {
                color: "#f44242",
              },
            },
          },
        },
      };
      
      new Chart(
        document.getElementById("bar-chart-custom-options"),
        dataBarCustomOptions,
        optionsBarCustomOptions
      );
    },[])

    useEffect(()=>{
        const dataDoughnut = {
            type: 'doughnut',
            data: {
              datasets: [
                {
                  label: 'Traffic',
                  data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                  backgroundColor: [
                    'rgba(63, 81, 181, 0.5)',
                    'rgba(77, 182, 172, 0.5)',
                    'rgba(66, 133, 244, 0.5)',
                    'rgba(156, 39, 176, 0.5)',
                    'rgba(233, 30, 99, 0.5)',
                    'rgba(66, 73, 244, 0.4)',
                    'rgba(66, 133, 244, 0.2)',
                  ],
                },
              ],
            },
          };
          
          new Chart(document.getElementById('doughnut-chart'), dataDoughnut);
    },[])


    useEffect(()=>{
      const dataPolar = {
  type: 'polarArea',
  data: {
    datasets: [
      {
        label: 'Traffic',
        data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
        backgroundColor: [
          'rgba(63, 81, 181, 0.5)',
          'rgba(77, 182, 172, 0.5)',
          'rgba(66, 133, 244, 0.5)',
          'rgba(156, 39, 176, 0.5)',
          'rgba(233, 30, 99, 0.5)',
          'rgba(66, 73, 244, 0.4)',
          'rgba(66, 133, 244, 0.2)',
        ],
      },
    ],
  },
};

new Chart(document.getElementById('polar-area-chart'), dataPolar);
    },[])
  return <>
  
  
  <div className='w-full h-full bg-[#F5F5F5] flex flex-col '>

  <Navbar/>

<h1 className=' text-3xl font-bold mt-3 ml-12 font-serif text-gray-900 '>
Sell Cars
</h1>

<div className='flex flex-wrap gap-6 mt-4 justify-center font-serif'>

  <div className='w-[320px]   sm:w-[630px] h-auto sm:h-[398px] rounded-xl p-4 bg-white'>
    <h1 className='text-center text-2xl mt-5 text-gray-900 font-semibold'>2022 Mercedes Benz</h1>
<img className='m-auto' src="Frame 82.png" alt="Frame 82.png" />
</div>



<div className='w-[320px]   sm:w-[630px] h-auto sm:h-[398px] rounded-xl p-2 bg-white'>
    <h1 className='text-center text-2xl mt-5 text-gray-900 font-semibold'>Tracking History</h1>
    <div class="mx-auto w-4/5 overflow-hidden  mt-16">
  <canvas id="bar-chart-custom-options"></canvas>
</div></div>
</div>


<div className='flex items-center flex-wrap justify-between mx-10 mt-4'>
    
<h1 className=' text-3xl font-bold mt-3  font-serif text-gray-900 '>
Offers</h1>
<div className='flex flex-row gap-4'>

<button class="bg-white  text-grey-darkest font-bold gap-5 py-2 px-10 rounded-full inline-flex items-center">
  <span className='text-[#A162F7]' >New</span>
  <img className='w-3 mt-1' src="Rectangle@2x.png" alt="Rectangle@2x.png" />
</button>

<button class="bg-white  text-grey-darkest font-bold gap-5 py-2 px-10 rounded-full inline-flex items-center">
  <span className='text-[#A162F7]' >Toyota</span>
  <img className='w-3 mt-1' src="Rectangle@2x.png" alt="Rectangle@2x.png" />
</button>
</div>
</div>



<div className=' cursor-pointer w-[320px] gap-2 p-1 sm:w-[1260px] mt-4 m-auto rounded-xl bg-white h-auto sm:h-[180px] flex flex-wrap justify-around'>

<div className='mt-9'>
  <h1 className='text-xl text-gray-900 font-bold'>
    Killan James
  </h1>
  <div className='flex items-center gap-1'>

  <h1 className='text-2xl text-[#FF6370]'>
    $16,605
  </h1>
  <h1 className='text-gray-500 text-xs'>
avarage price  </h1>
  </div>
  <h1 className='text-gray-500 text-xs'>
    market avarage is $16,224
  </h1>
  <button class="bg-[#FF6370] mt-2    py-2 px-6 rounded-full inline-flex items-center">
  <img className='w-3' src="vector (Stroke).png" alt="vector (Stroke).png" />
</button>
</div>


<div className='flex flex-col mt-8 items-center'>

<div className="radial-progress text-[#70CF97]" style={{"--value":45}}>45%</div>
<h1 className='text-[#70CF97] font-medium '>Excellent</h1>
<h1 className='text-[#72767C] font-bold'>Impression Share</h1>

</div>

<div class=" w-32  mt-6 flex flex-col items-center ">
  <canvas id="doughnut-chart"></canvas>
  <h1 className='absolute mt-14 text-gray-900 font-bold text-lg '>
    $811
  </h1>
</div>
<div className='flex mt-10 flex-col items-center'>
<img className='w-8' src="aaaaa (1).png" alt="aaaaa (1).png" />
<h1 className='text-xl text-[#407EF9]'>$1,174</h1>
<h1>Model Spend</h1>
</div>

<div className='flex mt-10 flex-col items-center'>
<img className='w-8' src="aaaaa (3).png" alt="aaaaa (1).png" />
<h1 className='text-xl text-[#FF6370]'>$1,174</h1>
<h1>Model Spend</h1>
</div>


<div className='flex mt-10 flex-col items-center'>
<img className='w-8' src="aaaaa (2).png" alt="aaaaa (1).png" />
<h1 className='text-xl text-[#A162F7]'>$1,174</h1>
<h1>Spend per Unit Turned</h1>
</div>

</div>



<div className=' cursor-pointer w-[320px] gap-2 p-1 sm:w-[1260px] mt-6 m-auto rounded-xl bg-white h-auto sm:h-[180px] flex flex-wrap justify-around'>

<div className='mt-9'>
  <h1 className='text-xl text-gray-900 font-bold'>
    Killan James
  </h1>
  <div className='flex items-center gap-1'>

  <h1 className='text-2xl text-[#FF6370]'>
    $16,605
  </h1>
  <h1 className='text-gray-500 text-xs'>
avarage price  </h1>
  </div>
  <h1 className='text-gray-500 text-xs'>
    market avarage is $16,224
  </h1>
  <button class="bg-[#FF6370] mt-2    py-2 px-6 rounded-full inline-flex items-center">
  <img className='w-3' src="vector (Stroke).png" alt="vector (Stroke).png" />
</button>
</div>


<div className='flex flex-col mt-8 items-center'>

<div className="radial-progress text-[#70CF97]" style={{"--value":45}}>45%</div>
<h1 className='text-[#70CF97] font-medium '>Excellent</h1>
<h1 className='text-[#72767C] font-bold'>Impression Share</h1>

</div>

<div class=" w-32  mt-6 flex flex-col items-center ">
<div class="mx-auto w-32 overflow-hidden">
  <canvas id="polar-area-chart"></canvas>
</div>  
</div>
<div className='flex mt-10 flex-col items-center'>
<img className='w-8' src="aaaaa (1).png" alt="aaaaa (1).png" />
<h1 className='text-xl text-[#407EF9]'>$1,174</h1>
<h1>Model Spend</h1>
</div>

<div className='flex mt-10 flex-col items-center'>
<img className='w-8' src="aaaaa (3).png" alt="aaaaa (1).png" />
<h1 className='text-xl text-[#FF6370]'>$1,174</h1>
<h1>Model Spend</h1>
</div>


<div className='flex mt-10 flex-col items-center'>
<img className='w-8' src="aaaaa (2).png" alt="aaaaa (1).png" />
<h1 className='text-xl text-[#A162F7]'>$1,174</h1>
<h1>Spend per Unit Turned</h1>
</div>

</div>

  </div>
  
  
  </>
}

export default Salescar