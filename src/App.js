import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';

function App() {
  return (
    <html>
      <div>
        
      <Container>
            <h1>
            Auditoria
            </h1>
        <Row> 
         {/* Primeira coluna com botões */}
          <Col xs={3}>
            <Stack gap = {3}>
              <Button>
              Trabalhos
              </Button>
              <Button>
              Apontamentos
              </Button>
            </Stack>
          </Col>
         {/* Segunda coluna com informações relevantes */}
          <Col xs={6}>
          Teste de informações
          </Col>
        </Row>
      </Container>
      </div>
  </html>

  );
}

export default App;
