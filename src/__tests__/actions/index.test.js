import * as actions from './../../actions';

describe("Joe's Exotic Sodas actions", () => {
  it('deleteSoda should create DELETE_SODA action', () => {
    expect(actions.deleteSoda(1)).toEqual({
      type: 'DELETE_SODA',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addSoda should create ADD_SODA action', () => {
    expect(actions.addSoda({name: 'Gamer Soda', flavor: 'Battery Acid', cans: '200', id: 1})).toEqual({
      type: 'ADD_SODA',
      name: 'Gamer Soda',
      flavor: 'Battery Acid',
      cans: '200',
      id: 1
    });
  });
});