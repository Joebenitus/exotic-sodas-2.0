export default (state = {}, action) => {
  const { name, flavor, cans, id } = action;
  switch (action.type) {
    case 'ADD_SODA':
      return Object.assign({}, state, {
        [id]: {
          name,
          flavor,
          cans,
          id
        }
      });
    case 'DELETE_SODA':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};