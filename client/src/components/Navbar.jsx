import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3>Coding Coasters</h3>
        <Link to='/' ><h4>Home</h4></Link>
        <Link to='/create-park'><h4>Create Park</h4></Link>
    </div>
  )
}
export default Navbar