import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Loader from './components/Loader';


function App() {
  const [loading, setLoading] = useState(1)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(0)
    }, 2000);
  },[])
  return (
    <div className="App">
  <BrowserRouter basename={process.env.PUBLIC_URL}>
        {
          loading
          ?
          <Loader/>
          :
          <Router/>
        }
      </BrowserRouter>
    </div>

  );
}

export default App;
