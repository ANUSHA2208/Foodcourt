import Home from './pages/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import View from './pages/View';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<View/>}/>
    <Route path="/home" element={<Home/>}/>
    </Routes>
    </div>

  );
}

export default App;
