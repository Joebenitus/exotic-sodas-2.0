import sodaListReducer from '../../reducers/soda-list-reducer';

describe('sodaListReducer', () => {

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
      type: 'ADD_SODA',
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
})