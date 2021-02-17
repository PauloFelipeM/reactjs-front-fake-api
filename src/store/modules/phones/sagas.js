import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  createPhoneSuccess,
  updatePhoneSuccess,
  removePhoneSuccess,
  listPhoneSuccess,
} from './actions';

export function* createPhone({ payload }) {
  try {
    const response = yield call(api.post, 'phones', payload.data);

    toast.success('Telefone criado com sucesso');

    yield put(createPhoneSuccess(response.data));

    history.push('/');
  } catch (error) {
    toast.error(
      'Ocorreu um erro ao criar o telefone, por favor tente novamente mais tarde.'
    );
  }
}

export function* updatePhone({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.put, `phones/${id}`, payload.data);

    toast.success('Telefone atualizado com sucesso');

    yield put(updatePhoneSuccess(response.data));

    history.push('/');
  } catch (error) {
    toast.error(
      'Ocorreu um erro ao atualizar o telefone, por favor tente novamente mais tarde.'
    );
  }
}

export function* removePhone({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `phones/${id}`);

    toast.success('Telefone removido com sucesso');

    yield put(removePhoneSuccess(id));
  } catch (error) {
    toast.error(
      'Ocorreu um erro ao remover o telefone, por favor tente novamente mais tarde.'
    );
  }
}

export function* listPhones({ payload }) {
  try {
    const response = yield call(
      api.get,
      `/phones?_page=${payload.page}&_limit=4`
    );

    yield put(listPhoneSuccess(response.data));
  } catch (error) {
    toast.error(
      'Ocorreu um erro ao listar os telefones, por favor tente novamente mais tarde.'
    );
  }
}

export default all([
  takeLatest('@phones/CREATE_PHONE_REQUEST', createPhone),
  takeLatest('@phones/UPDATE_PHONE_REQUEST', updatePhone),
  takeLatest('@phones/REMOVE_PHONE_REQUEST', removePhone),
  takeLatest('@phones/LIST_PHONE_REQUEST', listPhones),
]);
