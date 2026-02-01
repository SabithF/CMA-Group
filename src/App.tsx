import './App.css'
import Home from './components/Home'
import { Route, Routes } from "react-router-dom";
import Tea from './components/Tea';

function App() {
  

  return (
    <>
      

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/tea' element={<Tea />} />
      </Routes>
      
      
    </>
  )
}

export default App
