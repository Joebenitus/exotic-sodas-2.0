import sodaListReducer from '../../reducers/soda-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('sodaListReducer', () => {

  const currentState = {
    1: {
      name: 'Grandma\'s Kiss',
      flavor: 'Salty Watermelon',
      cans: '57',
      id: 1
    },
    2: {
      name: 'Bubble Reaper',
      flavor: 'Jalapeno',
      cans: '52',
      id: 2
    }
  }

  let action;
  const sodaData = {
    name: 'Non-Alcoholic Beer',
    flavor: 'Bread',
    cans: '100',
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(sodaListReducer({}, { type: null })).toEqual({});
  })

  test('Should successfully add new soda data to masterSodaList', () => {
    const { name, flavor, cans, id } = sodaData;
    action = {
      type: c.ADD_SODA,
      name,
      flavor,
      cans,
      id
    };

    expect(sodaListReducer({}, action)).toEqual({
      [id] : {
        name,
        flavor,
        cans,
        id
      }
    })
  })

  test('Should successfully delete a soda', () => {
    action = {
      type: c.DELETE_SODA,
      id: 1
    };
    expect(sodaListReducer(currentState, action)).toEqual({
      2: {
        name: 'Bubble Reaper',
        flavor: 'Jalapeno',
        cans: '52',
        id: 2
      }
    })
  })
})