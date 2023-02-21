import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ParkDetails from './pages/ParkDetails';
import Navbar from './components/Navbar';
import ParkForms from './components/ParkForms'

function App() {
  return (
    <div>
      <Navbar />
      <ParkForms />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/parkdetails/:id' element={<ParkDetails />} />
          <Route path='/create-park' element={<ParkForms />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
