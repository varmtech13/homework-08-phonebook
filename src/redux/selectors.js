import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters;

export const getVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, selectFilter) => {
    console.log('Calculating visible tasks');
    return contacts.filter(contact =>
      contact.name.toLowerCase()?.includes(selectFilter.toLowerCase())
    );
  }
);
