import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];

// const contactsInitialState = {
//   id: ['id-1', 'id-2', 'id-3', 'id-4'],
//   name: ['Rosie Simpson', 'Hermione Kline', 'Eden Clements', 'Annie Copeland'],
//   phone: ['459-12-56', '443-89-12', '645-17-79', '227-91-26'],
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, phone) {
        return {
          payload: {
            id: nanoid(),
            name,
            phone,
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
