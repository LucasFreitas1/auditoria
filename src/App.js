import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Apontamentos from './Pages/Apontamentos';
import Cadastro from './Pages/Cadastro';
import Followup from './Pages/Followup';
import Arquivo from './Pages/Arquivo';
import Configuracoes from './Pages/Configuracoes';
import Logout from './Pages/Logout';

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
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/apontamentos" element={<Apontamentos />} />
                <Route path="/followup" element={<Followup />} />
                <Route path="/arquivo" element={<Arquivo />} />
                <Route path="/configuracoes" element={<Configuracoes />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </Router>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
