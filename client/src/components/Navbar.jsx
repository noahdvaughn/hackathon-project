import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='iconDiv'>
      <h3 className='pageTitle'>Coding Coasters</h3>
        <img  className='icon'src='https://cdn-icons-png.flaticon.com/512/106/106545.png'/>
      </div>
      <div className='iconDiv'>

        <Link to='/' className='navLink'><h4>Home</h4></Link>
      <img className='homeIcon'src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png'/>

      </div>
      <div className='iconDiv'>
        <Link to='/create-park' className='navLink'><h4>Create Park</h4></Link>

        <img className='hammerIcon'src='https://cdn-icons-png.flaticon.com/512/969/969829.png'/>
      </div>
  
    </div>
  )
}
export default Navbar