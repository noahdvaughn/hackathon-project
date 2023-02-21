import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import ParkDetails from './pages/ParkDetails'
import Navbar from './components/Navbar'
import ParkForms from './components/ParkForms'
import axios from 'axios'

function App(props) {

    const [allParks, setAllParks] = useState([])
  
    const getAllParks = async () => {
      try {
        let res = await axios.get('/api/all-parks')
        setAllParks(res.data)
      } catch (err) {
        console.log(err)
      }
    }  

    useEffect(() => {
      getAllParks()
    }, [props])

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home getAllParks={getAllParks}/>} />
          <Route path="/parkdetails/:id" element={<ParkDetails />} />
          <Route path="/create-park" element={<ParkForms />} />
        </Routes>
      </main>

    </div>
  )
}


export default App
