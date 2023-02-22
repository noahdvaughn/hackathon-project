import { useState, useEffect } from 'react'
import Home from './Home'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


const ParkDetails = ( ) => {

  const location = useLocation()

  const { park } = location.state

  console.log(park);

      const [rides, setRides] = useState()

      // const [park, setPark] = useState('')

      const [updatePark, setUpdatePark] = useState([])

      const [newRide, setNewRide] = useState({
        name:'', runtime:'', park_id:park._id
      })

//when able to pass props will pass park into parkDetails

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`/api/create-ride/${park._id}`, newRide)
    // console.log(park);
    }

  const handleChange = (event) => {
    setNewRide(
      {...newRide, [event.target.name]: event.target.value}
    )
  }

  const getRides = async () =>{
    let res = await axios.get(`/api/get-ride-by-park-id/${park._id}`)
    setRides(res)
  }


  const deletePark = async () => {
          await axios.delete(`/delete-park/${park._id}`)
       }

  // const getOnePark = async () => {
  //        const response = await axios.get(`/api/get-park/${park._id}`)
  //         // setPark(response.data.park)
  //         console.log(response);
  // }

  const deleteRide = async () => {
  //     await axios.delete(needs a new route if we use this function)
  //     getAllParks();
  }

  useEffect( () =>{
    // getOnePark()
    getRides()
    
  },[])
  
  return (
    <div>
      <div>
      {rides.data.ride &&      
      rides.data.ride.map((oneRide) => (
                <div key={oneRide._id} className='card'>
                    <p>{oneRide.name}</p>
                    <p>{oneRide.runTime}</p>
                    <button className='delete' id='deleteRide' onClick={() => deleteRide(oneRide)}>Delete Ride</button>
                </div>
            ))}
      </div>
      <form onSubmit={(e) => handleSubmit(e, updatePark._id)}>
          <input  
            name='name'
            value={newRide.name}
            type='text'
            placeholder='Name'
            onChange={handleChange}/>
            <input  
            name='runtime'
            value={newRide.runtime}
            type='text'
            placeholder='runtime'
            onChange={handleChange}/>
            <button>Add Ride</button>
      </form>
      <button onClick={deletePark}>Delete Park</button>
    </div>
  )
}

export default ParkDetails
