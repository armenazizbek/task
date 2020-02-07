import React from 'react';

export default ({children, id, draggable}) => {
    const onDragStart = (e) => {
        /**  setting data on drag start */
        e.dataTransfer.setData('transfer', e.target.id);
    };

    const onDragOver = (e) => {
        e.stopPropagation();
    };

    return <div id={id} onDragStart={onDragStart} onDragOver={onDragOver} draggable={draggable}>
        {children}
    </div>
};
