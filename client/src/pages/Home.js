import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [allParks, setAllParks] = useState([])

  const getAllParks = async () => {
    try {
      let res = await axios.get('/api/all-parks')
      console.log(res)
      setAllParks(res.data.parks)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllParks()
  }, [])

  return (
    <div className="homeBody">
      {allParks &&
        allParks.map((park) => (
          <Link
            to={`/parkdetails/${park._id}`}
            key={park._id}
            state={{ park: park }}
            className="parkLink"
          >
            <h1>{park.name}</h1>
            <img src={`${park.picture_url}`} className="parkImage" />
          </Link>
        ))}
    </div>
  )
}
export default Home
