import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { Onas } from './components/Onas'; 
import { Zapis } from './components/Zapis'; 
import { Adres } from './components/Adres'; 
import { Contacts } from './components/Contacts'; 
import { Prepod } from './components/Prepod'; 
import { Groups } from './components/Groups'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} /> 
        <Route path="/Onas" element={<Onas />} /> 
        <Route path="/Zapis" element={<Zapis />} /> 
        <Route path="/Adres" element={<Adres />} /> 
        <Route path="/Contacts" element={<Contacts />} /> 
        <Route path="/Prepod" element={<Prepod />} /> 
        <Route path="/Groups" element={<Groups />} /> 
      </Routes>
    </Router>
  );
}

export default App;
