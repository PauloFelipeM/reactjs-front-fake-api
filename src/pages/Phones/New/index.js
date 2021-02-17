import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Button, Row, Col } from 'reactstrap';

import { createPhoneRequest } from '~/store/actions';

import Loader from '~/components/Loader';

import { Container, Label, ColBtns } from './styles';

const schema = Yup.object().shape({
  value: Yup.string().required('O telefone é obrigatorio'),
  monthyPrice: Yup.string().required('O Preco mensal é obrigatorio'),
  setupPrice: Yup.string().required('O Preco de configuracao é obrigatorio'),
  currency: Yup.string().required('A Moeda é obrigatoria'),
});

function New() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.phones);

  function handleSubmit({ value, monthyPrice, setupPrice, currency }) {
    dispatch(
      createPhoneRequest({
        value,
        monthyPrice,
        setupPrice,
        currency,
      })
    );
  }

  return (
    <Container>
      <div className="card">
        <div className="card-body">
          <Form schema={schema} onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
                <h4 className="card-title">Novo telefone</h4>
              </Col>
              <Col md={6} className="mb-3">
                <Label>Telefone</Label>
                <Input className="form-control" name="value" type="text" />
              </Col>
              <Col md={6} className="mb-3">
                <Label>Preco mensal</Label>
                <Input
                  className="form-control"
                  name="monthyPrice"
                  type="text"
                />
              </Col>
              <Col md={6} className="mb-3">
                <Label>Preco de configuracao</Label>
                <Input className="form-control" name="setupPrice" type="text" />
              </Col>
              <Col md={6} className="mb-3">
                <Label>Moeda</Label>
                <Input className="form-control" name="currency" type="text" />
              </Col>
            </Row>
            <Row>
              <ColBtns>
                <Link to="/">Voltar</Link>
                <Button
                  color="primary"
                  className="btn btn-primary waves-effect"
                  type="submit"
                >
                  {loading ? (
                    <Loader color="white" isButton="button" />
                  ) : (
                    'Criar'
                  )}
                </Button>
              </ColBtns>
            </Row>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default New;
