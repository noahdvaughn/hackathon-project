import { useState, useEffect} from 'react'
import Home from './Home'
import axios from 'axios'

const ParkDetails = () => {
    const [rides, setRides] = useState('')

    // const deletePark = async () => {
    //         await axios.delete(`/delete-park/${park._id}`)
    //      }
    // getPark();
  return (
    <div>
      {/* <button onClick={deletePark}>Delete Park</button>  */}
       {
//     rides && (rides.map((oneRide) => (
//         <div key={oneRide._id} className='card'>
//             <p>{oneRide.name}</p>
//             <p>{oneRide.runTime}</p>
//             <button className='delete' id='deleteRide' onClick={() => deleteRide(oneRide)}>Delete Ride</button>
//         </div>
//     )))
        }
    </div>
  )
}

export default ParkDetails