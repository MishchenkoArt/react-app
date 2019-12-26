import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header.jsx'
import Navbar from './componets/Navbar/Navbar.jsx'
import Profile from './componets/Profile/Profile.jsx'
import Dialogs from './componets/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
const App = () => {
  return (

    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />

      </div>

    </BrowserRouter>

  );
}





export default App;