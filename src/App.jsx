import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fhome from './Components/Fhome';
import Fsignup from './Components/Fsignup';
import Flogin from './Components/Flogin';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Flogin/>}/>
     <Route path='/Flogin' element={<Flogin/>}/>
     <Route path='/Fsignup' element={<Fsignup/>}/>
     <Route path='/Fhome' element={<Fhome/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
