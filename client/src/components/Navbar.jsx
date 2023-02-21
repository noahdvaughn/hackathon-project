import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h4>Coding Coasters</h4>
        <Link to='/' >Home</Link>
        <Link to='/create-park'>Create Park</Link>
    </div>
  )
}
export default Navbar