import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cadastro() {
  return (


    <div className='cadastro'>
      <Container>
        <Row>
          <h2>Cadastro de apontamentos</h2>
        </Row>
        <Row>
          <Col>
            <input type="text"></input>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Cadastro;