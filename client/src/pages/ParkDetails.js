import { useState, useEffect } from 'react'
import Home from './Home'
import axios from 'axios'

const ParkDetails = () => {
      const [rides, setRides] = useState('')
      const [park, setPark] = useState('')


  const deletePark = async () => {
          await axios.delete(`/delete-park/${park._id}`)
       }

  const getOnePark = async () => {
         const response = await axios.get(`/api/get-park/63f52e617a6e913b979cee84`)
          setPark(response.data.park)
          console.log(response);
  }

  const deleteRide = async () => {
  //     await axios.delete(needs a new route if we use this function)
  //     getAllParks();
  }

  useEffect(() =>{
    getOnePark()
  },[])
         
  return (
    <div>
      <div>
      {park &&      
      park.ride.map((oneRide) => (
                <div key={oneRide._id} className='card'>
                    <p>{oneRide.name}</p>
                    <p>{oneRide.runTime}</p>
                    <button className='delete' id='deleteRide' onClick={() => deleteRide(oneRide)}>Delete Ride</button>
                </div>
            ))}
      </div>
      
      <button onClick={deletePark}>Delete Park</button>
    </div>
  )
}

export default ParkDetails
