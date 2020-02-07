import {
    ADD_CONS,
    REMOVE_CONS,
    CHANGE_CONS,
} from '../actions/cons';

const initialState = [
    {text: 'It\'s really tasty'},
    {text: 'It\'s really tasty'},
    {text: 'It\'s really tasty'},
    {text: 'It\'s really tasty'},
    {text: 'It\'s really tasty'},
    {text: ''},
];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CONS:
            return [...state, {text: payload ? payload.text : ''}];
        case REMOVE_CONS:
            return state.filter((e, index) => index !== payload.index);
        case CHANGE_CONS:
            const { value, index } = payload;
            const newState = [...state];
            newState[index] = {text: value};
            return newState;
        default:
            return state;
    }
}
