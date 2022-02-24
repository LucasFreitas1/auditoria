import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

function Apontamentos() {
  return (
    <div className='apontamentos'>
      <h2>Listagem de apontamentos</h2>
      <Row>
          <h2>Cadastro de apontamentos</h2>
        </Row>
        <Row>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Row>

    </div>
  );
}

export default Apontamentos;