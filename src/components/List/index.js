import React from 'react';
import {useDispatch} from "react-redux";
import ListItem from "../ListItem";
import Dragable from '../../components/DnD/Dragable';

export default ({items, change, remove, add, type}) => {
    const dispatch = useDispatch();

    const onItemChange = (e, index) => {
        const { target: { value }, nativeEvent: { inputType } } = e;

        /** add event */
        if(inputType === 'insertText' && value.length === 1) {
            dispatch(add());
        }

        /** remove event */
        if(!value && index !== items.length -1) {
            dispatch(remove({index}));
            return;
        }

        /** change event */
        dispatch(change({value, index}))
    };

    /** moving empty input to the bottom ov the list */
    const compare = ( a, b ) => {
        if ( a.text && !b.text ){
            return -1;
        }
        if ( !a.text > b.text ){
            return 1;
        }
        return 0;
    };

    return <ol className='list'>
        {items.sort(compare).map((p, index) => <Dragable id={`${type}_${index}`} key={index} draggable={!!items[index].text}>
            <ListItem {...p} index={index} onChange={onItemChange}/>
        </Dragable>)}
    </ol>
};
