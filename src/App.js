import React, { useContext } from 'react';

import './App.css'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
// import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
import illuPerso from './assets/illu.png';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      {/* <MainHeader /> */}
      <main className='login'>
        <img src={illuPerso} alt='A man next to a tree' />
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
