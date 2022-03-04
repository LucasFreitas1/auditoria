import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Form, Button, Table } from 'react-bootstrap';
import '../App.css';

function Login() {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')


  return (

    <div className="login">
      {/*Container para colunas*/}
      <Container>
        <Row >
          {/*Primeira coluna*/}
          <Col md={4}>
          </Col>
          <Col md={4} >
            <Row >
              <h2>Auditoria</h2>
            </Row>
            <Row className='selectForm'>
              <Form.Control type="text" placeholder="Usuário"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              ></Form.Control>
            </Row>
            <Row className='selectForm'>
              <Form.Control type="password" placeholder="Senha"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
              ></Form.Control>
            </Row>
            <br />
            <Row>
              <Col>
                <Button type="submit" className='buttonLogin'>Login</Button>
              </Col>
              <Col>
                <Button type="submit" variant='danger' className='buttonLogin'>Esqueci minha senha</Button>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Login;