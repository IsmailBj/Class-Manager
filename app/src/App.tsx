import React, {useState, useEffect} from 'react';
import WelcomePage from './components/templates/welcome/welcomePage'
import Header from './components/templates/header/Header';
import Home from './components/templates/home/Home';
import './App.scss';

function App() {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    setIsLogin(true)
  },[])

  return (
    <div className="App">
      {!isLogin ? <WelcomePage/> : 
      <>
      <Header/>
      <Home/>
      </>
      }
        
    </div>
  );
}

export default App;
