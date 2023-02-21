import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <Link to='/' >Home</Link>
        <Link to='/create-park' >Create Park</Link>
    </div>
  )
}
export default Navbar