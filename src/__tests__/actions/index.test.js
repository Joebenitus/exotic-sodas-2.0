import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe("Joe's Exotic Sodas actions", () => {
  it('deleteSoda should create DELETE_SODA action', () => {
    expect(actions.deleteSoda(1)).toEqual({
      type: c.DELETE_SODA,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addSoda should create ADD_SODA action', () => {
    expect(actions.addSoda({name: 'Gamer Soda', flavor: 'Battery Acid', cans: '200', id: 1})).toEqual({
      type: c.ADD_SODA,
      name: 'Gamer Soda',
      flavor: 'Battery Acid',
      cans: '200',
      id: 1
    });
  });
});