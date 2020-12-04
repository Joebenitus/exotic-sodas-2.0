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

  test('Check that ADD_SODA action works for sodaListReducer and rootReducer', () => {
    const action = {
      type: 'ADD_SODA',
      name: 'TV-Static',
      flavor: 'Vinegar',
      cans: '43',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterSodaList).toEqual(sodaListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and rootReducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  })
});