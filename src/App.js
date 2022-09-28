import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/Header';
import Home from './component/Home/Home.jsx'

function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </Router>
}

export default App;
