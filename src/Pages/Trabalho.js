import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

function Trabalho() {


  return (


    <div className='cadastro'>
      {/*Primeira coluna onde dados para cadastrar irão*/}
      <Col>
        {/* Primeira linha com título */}
        <Row>
          <h3>Cadastro de trabalhos</h3>
        </Row>
        {/* Segunda linha com duas colunas para tipo de trabalho e empresa */}
        <Row className='selectForm'>
          <Col>
            <Form.Label>Tipo de trabalho</Form.Label>
            <Form.Select size="sm" aria-label="Default select example">
              <option> </option>
              <option value="1">Plano de Auditoria</option>
              <option value="2">Diretoria</option>
              <option value="3">Projeto</option>
              <option value="4">CCI</option>
              <option value="5">Adicional</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Empresa</Form.Label>
            <Form.Select size="sm" aria-label="Default select example">
              <option> </option>
              <option value="1">Brasal Participações</option>
              <option value="2">Brasal Incorporações</option>
              <option value="3">Brasal Refrigerantes</option>
              <option value="4">Brasal Veículos</option>
              <option value="5">Brasal Combustíveis</option>
              <option value="6">Brasal Energia</option>
              <option value="7">Brasal Hotel</option>
              <option value="8">Brasal Corretora</option>
              <option value="9">Fazendas Brasal</option>
              <option value="10">Instituto Brasal</option>
              <option value="11">Outra</option>
            </Form.Select>
          </Col>
        </Row>
        {/* Terceira linha  com nome do trabalho*/}
        <Row className='selectForm'>
          <Col>
            <Form.Label>Nome Trabalho</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Digite o nome" />
            <Form.Text className="text-muted">
              O nome do trabalho executado (Ex: Inventário, Análise de Caixa, Avaliação de Vendas)
            </Form.Text>
          </Col>
        </Row>
        {/* Quarta linha com Mês e Ano de início do trabalho*/}
        <Row className='selectForm'>
          <Form.Label>Mês e ano de início do trabalho</Form.Label>
          <Col>
            <Form.Select size="sm" aria-label="Default select example">
              <option> </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Form.Select>
            <Form.Text className="text-muted">
              Mês
            </Form.Text>
          </Col>
          <Col>
            <Form.Select size="sm" aria-label="Default select example">
              <option> </option>
              <option value="1">2021</option>
              <option value="2">2022</option>
              <option value="3">2023</option>
              <option value="4">2024</option>
            </Form.Select>
            <Form.Text className="text-muted">
              Ano
            </Form.Text>
          </Col>
        </Row>
        {/* Quinta linha com Botão de enviar*/}
        <Row>
          <Col>
            <br />
            <Button type="submit" value="Submit">Enviar</Button>
          </Col>
          <Col>
            {/*área vazia para botão ocupar espaço menor ou para incluir um segundo botão*/}
          </Col>
        </Row>

      </Col>
      {/*Segunda coluna para uso futuro*/}
      <Col>
      </Col>
    </div>

  );
}

export default Trabalho;