import * as c from './ActionTypes';

export const deleteSoda = id => ({
  type: c.DELETE_SODA,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addSoda = (soda) => {
  const { name, flavor, cans, id } = soda;
  return {
    type: c.ADD_SODA,
    name,
    flavor,
    cans,
    id
  }
}

export const selectSoda = () => ({
  type: c.SELECT_SODA
});