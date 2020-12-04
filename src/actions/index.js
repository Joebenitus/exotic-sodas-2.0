export const deleteSoda = id => ({
  type: 'DELETE_SODA',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addSoda = (soda) => {
  const { name, flavor, cans, id } = soda;
  return {
    type: 'ADD_SODA',
    name,
    flavor,
    cans,
    id
  }
}