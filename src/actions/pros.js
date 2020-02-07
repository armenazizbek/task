export const ADD_PROS = 'ADD_PROS';
export const REMOVE_PROS = 'REMOVE_PROS';
export const CHANGE_PROS = 'CHANGE_PROS';

export const addPros = (payload) => ({ type: ADD_PROS, payload });
export const removePros = (payload) => ({ type: REMOVE_PROS, payload });
export const changePros = (payload) => ({ type: CHANGE_PROS, payload });
