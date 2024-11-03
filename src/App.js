import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Homepage } from './Pages/Homepage';
import { Dashboard } from './Pages/Dashboard';
function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={
        <><Navbar /><Dashboard /></>
        } />
      <Route path='/' element={<Navbar/>}/>
    </Routes>
  );
}

export default App;
