import './Style/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mission from './components/Pages/Mission';
import MyProfile from './components/Pages/MyProfile';
import Rocket from './components/Pages/Rocket/Rocket';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
