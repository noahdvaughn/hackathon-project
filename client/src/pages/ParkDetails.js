import { useState, useEffect } from 'react'
import Home from './Home'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const ParkDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const park = location.state
  let rideText = ''

  const [rides, setRides] = useState()

  // const [park, setPark] = useState('')

  const [updatePark, setUpdatePark] = useState([])

  const [newRide, setNewRide] = useState({
    name: '',
    runtime: '',
    park_id: park._id
  })

  //when able to pass props will pass park into parkDetails

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`/api/create-ride/${park._id}`, newRide)
    getRides()
    // console.log(park);
  }

  const handleChange = (event) => {
    setNewRide({ ...newRide, [event.target.name]: event.target.value })
  }

  const getRides = async () => {
    //take out next line(http://localhost:3001)
    let res = await axios.get(
      `http://localhost:3001/api/get-ride-by-park-id/${park._id}`
    )
    setRides(res.data.ride)
  }

  const deletePark = async () => {
    await axios.delete(`/api/delete-park/${park._id}`)
    navigate('/')
  }

  // const getOnePark = async () => {
  //        const response = await axios.get(`/api/get-park/${park._id}`)
  //         // setPark(response.data.park)
  //         console.log(response);
  // }

  const deleteRide = async (ride) => {
    await axios.delete(`/api/delete-ride/${ride._id}`)
    getRides()
    //     await axios.delete(needs a new route if we use this function)
    // getAllParks();
  }

  if (rides && rides.length) {
    rideText = 'Ride List:'
    console.log(rides)
  } else {
    rideText = 'No rides here. What a crappy park... Add one below?'
  }

  useEffect(() => {
    // getOnePark()
    getRides()
  }, [])

  return (
    <div className="detailsBody">
      <img className="detailsImage" src={`${park.picture_url}`} />
      <div className="nameAndLocation">
        <h1>{park.name}</h1>
        <h2 className="parkLocation">{park.location}</h2>
      </div>

      {rides && rides.length ? (
        <div className="rideListDiv" style={{ border: '1px solid #1f728d' }}>
          <h2 className="rideListText">{rideText}</h2>
          {rides &&
            rides.map((oneRide) => (
              <div key={oneRide._id} className="card">
                <h3>{oneRide.name}</h3>
                {oneRide.runtime ? (
                  <h3 className="runtime">
                    {' '}
                    - Runtime: {oneRide.runtime} mins
                  </h3>
                ) : (
                  <></>
                )}
                <img
                  id="deleteRide"
                  onClick={() => deleteRide(oneRide)}
                  className="trashIcon"
                  alt="trash icon"
                  src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
                />
              </div>
            ))}
        </div>
      ) : (
        <h2 className="rideListText">{rideText}</h2>
      )}
      <h2 className="createRideText">Create New Ride</h2>
      <form onSubmit={(e) => handleSubmit(e, updatePark._id)}>
        <input
          name="name"
          value={newRide.name}
          type="text"
          placeholder="Ride name"
          onChange={handleChange}
        />
        <input
          name="runtime"
          value={newRide.runtime}
          type="text"
          placeholder="Runtime in mins"
          onChange={handleChange}
        />
        <button onClick={handleChange}>Add Ride</button>
      </form>
      <button onClick={() => deletePark(park._id)} className="deleteParkButton">
        DELETE
      </button>
    </div>
  )
}

export default ParkDetails
