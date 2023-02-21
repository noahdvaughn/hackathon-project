import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ParkForms = () => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    location: '',
    picture_url: ''
  }
  const [formState, setFormState] = useState(initialState)
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post('/api/create-park', formState)
    setFormState(initialState)
    await navigate('/')
  }

  let validButton = ''
  if (formState.name) {
    validButton = (
      <button type="submit" className="validButton">
        Create New Park
      </button>
    )
  } else {
    validButton = <h3>Park name is required</h3>
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h1 >Create Park</h1>
        <input
          placeholder="Name"
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
        />
        <input
          placeholder="Location"
          id="location"
          type="text"
          onChange={handleChange}
          value={formState.location}
        />
        <input
          placeholder="Picture URL:"
          id="picture_url"
          type="text"
          onChange={handleChange}
          value={formState.picture_url}
        />
        {validButton}
      </form>
    </div>
  )
}
export default ParkForms