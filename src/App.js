import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Apontamentos from './Pages/Apontamentos';

function App() {
  return (
    <div className="App">
    <Router>
          <Sidebar/>
          <Routes>
          <Route path='/' component={Home} />
          <Route path='/apontamentos' component={Apontamentos} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
