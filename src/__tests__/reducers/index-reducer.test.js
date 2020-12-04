import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import sodaListReducer from '../../reducers/soda-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterSodaList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of sodaListReducer matches root reducer', () => {
    expect(store.getState().masterSodaList).toEqual(sodaListReducer(undefined, { type: null}));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null}));
  });
});