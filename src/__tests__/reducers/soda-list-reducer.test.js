import sodaListReducer from '../../reducers/soda-list-reducer';

describe('sodaListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(sodaListReducer({}, { type: null })).toEqual({});
  })
})