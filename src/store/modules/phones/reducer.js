import produce from 'immer';

const INITIAL_STATE = {
  phones: [],
  loading: true,
};

export default function phones(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@phones/CREATE_PHONE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@phones/UPDATE_PHONE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@phones/REMOVE_PHONE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@phones/LIST_PHONE_REQUEST': {
        draft.phones = [];
        draft.loading = true;
        break;
      }
      case '@phones/CREATE_PHONE_SUCCESS': {
        draft.phones.push(action.payload.phone);
        draft.loading = false;
        break;
      }
      case '@phones/UPDATE_PHONE_SUCCESS': {
        const updatedPhone = action.payload.phone;
        const newPhones = draft.phones.map((p) =>
          p.id === updatedPhone.id ? updatedPhone : p
        );
        draft.phones = newPhones;
        draft.loading = false;
        break;
      }
      case '@phones/REMOVE_PHONE_SUCCESS': {
        const { id } = action.payload;
        const newPhones = draft.phones.filter((p) => p.id !== id);
        draft.phones = newPhones;
        draft.loading = false;
        break;
      }
      case '@phones/LIST_PHONE_SUCCESS': {
        draft.phones = action.payload.phones;
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
