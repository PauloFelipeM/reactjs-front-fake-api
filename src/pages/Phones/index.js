import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import SweetAlert from 'react-bootstrap-sweetalert';

import history from '~/services/history';

import Paginator from '~/components/Paginator';
import Loader from '~/components/Loader';

import { removePhoneRequest, listPhoneRequest } from '~/store/actions';

import { Container } from './styles';

function Phones() {
  const dispatch = useDispatch();
  const { phones, loading } = useSelector((state) => state.phones);

  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    async function loadPhones() {
      dispatch(listPhoneRequest(page));
    }
    loadPhones();
  }, [page]);

  function goToNew() {
    history.push('/new');
  }

  function hideAlert() {
    setAlert(null);
  }

  async function remove(id) {
    dispatch(removePhoneRequest(id));
    hideAlert();
  }

  function showAlert(id) {
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Sim, deletar!"
        confirmBtnBsStyle="danger"
        title="Atenção"
        onConfirm={() => remove(id)}
        onCancel={hideAlert}
        focusCancelBtn
      >
        Tem certeza que deseja remover esse telefone?.
      </SweetAlert>
    );

    setAlert(getAlert());
  }

  function goToEdit(id) {
    history.push(`/${id}`);
  }

  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <Row>
                <Col md={10}>
                  <h4 className="card-title">Lista de telefones</h4>
                </Col>
                <Col md={2}>
                  <Button
                    color="primary"
                    className="btn btn-block btn-primary waves-effect"
                    onClick={goToNew}
                  >
                    Novo
                  </Button>
                </Col>
              </Row>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Numero</th>
                      <th>Preco mensal</th>
                      <th>Preco de configuracao</th>
                      <th>Moeda</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phones.map((phone) => (
                      <tr key={phone.id}>
                        <th scope="row">{phone.id}</th>
                        <th>{phone.value}</th>
                        <th>{phone.monthyPrice}</th>
                        <th>{phone.setupPrice}</th>
                        <th>{phone.currency}</th>
                        <td nowrap="true" width="1%">
                          <Button
                            color="secondary"
                            className="btn btn-secondary waves-effect"
                            onClick={() => goToEdit(phone.id)}
                          >
                            <i className="fal fa-pencil-alt" />
                          </Button>
                          <Button
                            color="danger"
                            className="btn btn-danger waves-effect waves-light"
                            onClick={() => showAlert(phone.id)}
                          >
                            <i className="fal fa-trash-alt" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {loading ? <Loader color="primary" /> : null}
                {!loading && phones.length <= 0 && (
                  <p className="text-center mt-3 mb-3">
                    Nenhum registro encontrado
                  </p>
                )}
                <Paginator pageClick={setPage} page={page} />
              </div>
            </div>
          </div>
        </div>
        {alert}
      </div>
    </Container>
  );
}

export default Phones;
