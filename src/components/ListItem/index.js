import React from 'react';

export default ({index, text='', onChange}) => {
    return <li className='list-item'>
        <input type="text" value={text} onChange={e => onChange(e, index)} className='list-item-input'/>
    </li>;
};
