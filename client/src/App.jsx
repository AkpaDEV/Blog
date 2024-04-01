import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import Header from './Components/Header';
import Projects from './Pages/Projects';
import SignUp from './Pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
           <Route path='/signin' element={<SignIn/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           <Route path='/projects' element={<Projects/>}/>
        </Routes>   
    </BrowserRouter>
  );
}

export default App;
