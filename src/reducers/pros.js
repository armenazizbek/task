import {
    ADD_PROS,
    REMOVE_PROS,
    CHANGE_PROS,
} from '../actions/pros';

const initialState = [
    {text: 'Makes me fat'},
    {text: 'Too expensive'},
    {text: ''},
];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PROS:
            return [...state, {text: payload ? payload.text : ''}];
        case REMOVE_PROS:
            console.log('ddd');
            return state.filter((e, index) => index !== payload.index);
        case CHANGE_PROS:
            const { value, index } = payload;
            const newState = [...state];
            newState[index] = {text: value};
            return newState;
        default:
            return state;
    }
}
