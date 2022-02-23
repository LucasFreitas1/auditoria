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
    <>
      <div className='App'>
        <Row className='altura'>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apontamentos" element={<Apontamentos />} />
              </Routes>
            </Router>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
