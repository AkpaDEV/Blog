import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import SingIn from './Pages/SingIn';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
           <Route path='/signin' element={<SingIn/>}/>
           <Route path='/signup' element={<SingUp/>}/>
           <Route path='/projects' element={<Projects/>}/>
        </Routes>   
    </BrowserRouter>
  );
}

export default App;
