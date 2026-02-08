import './App.css'
import Home from './components/Home'
import { Route, Routes } from "react-router-dom";
import Tea from './components/Tea';
import Spice from './components/spices';

function App() {
  

  return (
    <>
      

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/tea' element={<Tea />} />
        <Route path='/masa' element={<Spice/>} />

      </Routes>
      
      
    </>
  )
}

export default App
