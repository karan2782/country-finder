import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import Home from "./component/Home"
import Country from "./component/Country"
import { useEffect } from "react"


function App() {
  

  
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/:countryname' element={<Country />} />
   </Routes>
  </BrowserRouter>

  </>
  }

export default App
