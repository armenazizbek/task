import React from 'react';

export default ({title, children, leftBorder = false}) => {
    return <div className={`column ${leftBorder ? 'left-border' : ''}`}>
        <p className='list-title'>
            {title}
        </p>
        {children}
    </div>
};
