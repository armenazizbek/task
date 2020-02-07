import { combineReducers } from 'redux';
import cons from './cons';
import pros from './pros';

const combinedReducers = {
    cons,
    pros,
};

export default (state, action) => combineReducers(combinedReducers)(state, action);
