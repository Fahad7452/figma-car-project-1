import React from 'react'
import { useEffect  } from 'react';

import {Chart,initTE,} from "tw-elements";initTE({ Chart });

export default function Assetslinechat() {
  useEffect(()=>{
    // Chart
  const dataLine = {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday '],
      datasets: [
        {
          label: 'Traffic',
          data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
        },
      ],
    },
  };
  
  new Chart(document.getElementById('line-chart'), dataLine);
   },[])
  return <>

  <div class="mx-auto w-[400px] sm:w-[900px] h-[200px] sm:h-[280px] py-4 px-4  rounded-2xl mt-[4rem] bg-white overflow-hidden">
  <canvas id="line-chart"></canvas>
</div>



  
  
  
  </>
}
