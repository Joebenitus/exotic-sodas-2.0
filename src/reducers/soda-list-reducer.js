import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, flavor, cans, id } = action;
  switch (action.type) {
    case c.ADD_SODA:
      return Object.assign({}, state, {
        [id]: {
          name,
          flavor,
          cans,
          id
        }
      });
    case c.DELETE_SODA:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.SELECT_SODA:
      return state[id];
    default:
      return state;
  }
};