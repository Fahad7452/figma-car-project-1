import React from 'react'
import { useEffect } from 'react';
import {
    Chart,
    initTE,
  } from "tw-elements";
  
  
  initTE({ Chart });
function Barchat() {


useEffect(()=>{
  {{

    const dataBarCustomTooltip = {
      type: "bar",
      data: {
        labels: ["1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        datasets: [
          {
            label: "Traffic",
            data: [30, 15, 62, 65, 61, 65, 40],
          },
        ],
      },
    };
    
    const optionsBarCustomTooltip = {
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                label = `${label}: ${context.formattedValue} users`;
                return label;
              },
            },
          },
        },
      },
    };
    
    new Chart(
      document.getElementById("bar-chart-custom-tooltip"),
      dataBarCustomTooltip,
      optionsBarCustomTooltip
    );
  }
}

},[])

 



useEffect(()=>{
  {{

    const dataScatter = {
      type: "scatter",
      data: {
        datasets: [
          {
            borderColor: "#4285F4",
            backgroundColor: "rgba(66, 133, 244, 0.5)",
            label: "V(node2)",
            data: [
              {
                x: 1,
                y: -1.711e-2,
              },
              {
                x: 3.26,
                y: -2.708e-2,
              },
              {
                x: 1.58,
                y: -4.285e-2,
              },
              {
                x: 2.0,
                y: -3.772e-2,
              },
              {
                x: 2.51,
                y: -1.068e-1,
              },
              {
                x: 3.16,
                y: -1.681e-1,
              },
              {
                x: 3.98,
                y: -2.635e-1,
              },
              {
                x: 5.01,
                y: -4.106e-1,
              },
              {
                x: 6.31,
                y: -6.339e-1,
              },
              {
                x: 7.94,
                y: -9.659e-1,
              },
              {
                x: 10.0,
                y: -1.445,
              },
              {
                x: 12.6,
                y: -2.11,
              },
              {
                x: 15.8,
                y: -2.992,
              },
              {
                x: 20.0,
                y: -4.102,
              },
              {
                x: 25.1,
                y: -5.429,
              },
              {
                x: 31.6,
                y: -6.944,
              },
              {
                x: 39.8,
                y: -8.607,
              },
              {
                x: 50.1,
                y: -1.038e1,
              },
              {
                x: 63.1,
                y: -1.223e1,
              },
              {
                x: 79.4,
                y: -1.413e1,
              },
              {
                x: 100.0,
                y: -1.607e1,
              },
              {
                x: 126,
                y: -1.803e1,
              },
              {
                x: 158,
                y: -2e1,
              },
              {
                x: 200,
                y: -2.199e1,
              },
              {
                x: 251,
                y: -2.398e1,
              },
              {
                x: 316,
                y: -2.597e1,
              },
              {
                x: 398,
                y: -2.797e1,
              },
              {
                x: 501,
                y: -2.996e1,
              },
              {
                x: 631,
                y: -3.196e1,
              },
              {
                x: 794,
                y: -3.396e1,
              },
              {
                x: 1000,
                y: -3.596e1,
              },

              {
                x: 2.51,
                y: -1.068e-1,
              },
              {
                x: 3.16,
                y: -1.681e-1,
              },
              {
                x: 3.98,
                y: -2.635e-1,
              },
              {
                x: 5.01,
                y: -4.106e-1,
              },
              {
                x: 6.31,
                y: -6.339e-1,
              },
              {
                x: 7.94,
                y: -9.659e-1,
              },
              {
                x: 10.0,
                y: -1.445,
              },
              {
                x: 12.6,
                y: -2.11,
              },
              {
                x: 15.8,
                y: -2.992,
              },
              {
                x: 20.0,
                y: -4.102,
              },
              {
                x: 25.1,
                y: -5.429,
              },
              {
                x: 31.6,
                y: -6.944,
              },
              {
                x: 39.8,
                y: -8.607,
              },
              {
                x: 50.1,
                y: -1.038e1,
              },
              {
                x: 63.1,
                y: -1.223e1,
              },
              {
                x: 79.4,
                y: -1.413e1,
              },
              {
                x: 100.0,
                y: -1.607e1,
              },
              {
                x: 126,
                y: -1.803e1,
              },
              {
                x: 158,
                y: -2e1,
              },

            ],
          },
        ],
      },
    };
    
    const optionsScatter = {
      options: {
        title: {
          display: true,
          text: "Scatter Chart - Logarithmic X-Axis",
        },
        scales: {
          x: {
            type: "logarithmic",
            position: "bottom",
            scaleLabel: {
              labelString: "Frequency",
              display: true,
            },
          },
          y: {
            type: "linear",
            scaleLabel: {
              labelString: "Voltage",
              display: true,
            },
          },
        },
      },
    };
    
    new Chart(
      document.getElementById("scatter-chart"),
      dataScatter,
      optionsScatter
    );
  }
}

},[])


  return <>
<div className='flex flex-wrap justify-around mt-2 sm:mt-4'>


<div className=' bg-white  rounded-xl px-4'>
<h1 className='text-center text-gray-700 font-semibold text-lg mt-2'>Miles Statistics</h1>

<div className='flex justify-between mt-4 px-4'>
<img className='w-36 h-4' src="date@3x.png" alt="Frame 267.png" />
  <h1>
  256 Miles
  </h1>
</div>

<div class=" bg-white w-[250px]  sm:w-[580px]  overflow-hidden">
  <canvas id="bar-chart-custom-tooltip"></canvas>
</div>
</div>
  
  <div  className=' bg-white  rounded-xl px-4 mt-2 sm:mt-0'>
<h1 className='text-center text-gray-700 font-semibold text-lg mt-2'>
Car Statistics
</h1>
<div className='flex justify-between mt-4 px-4'>
<img className='w-36 h-4' src="button@3x.png" alt="Frame 267.png" />
  <h1>
  256 Miles
  </h1>
</div>

  <div class=" mt-4 w-[250px]  sm:w-[580px]  overflow-hidden">
  <canvas id="scatter-chart" className='text-red-500'></canvas>
</div>
  </div>
</div>
  
  </>
}
export default Barchat