import './App.css'
import Sidebar from "./Component/Sidebar"
import Dashboard from "./Component/Dashboard"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Sales from './Component/Sales'
import Salescar from './Component/Salescar'
import Assets from "./Component/Assets"
import Services from './Component/Services'
import Calender from './Component/Calender'
function App() {

  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<>    <div className='flex flex-row'><Sidebar/><Dashboard/> </div> </>}></Route>
        <Route path="/Assets" element={<>    <div className='flex flex-row'><Sidebar/><Assets/> </div> </>}></Route>
        <Route path="/Sales" element={<>    <div className='flex flex-row'><Sidebar/><Sales/> </div> </>}></Route>
        <Route path="/Salescar" element={<>    <div className='flex flex-row'><Sidebar/><Salescar/> </div> </>}></Route>
        <Route path="/calender" element={<>    <div className='flex flex-row'><Sidebar/><Calender/> </div> </>}></Route>
        <Route path="/Services" element={<>    <div className='flex flex-row'><Sidebar/><Services/> </div> </>}></Route>
      </Routes>
    </BrowserRouter>
    
  

    </>
  )
}

export default App
