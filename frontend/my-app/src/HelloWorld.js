import React, { Fragment } from 'react';
import './HelloWorld.css';

function HelloWorld() {
    return (
        // <hr/> - horizontal rule
        <Fragment>
            <hr/>
            <h1 className='h1-green'>Hello, World!</h1>
        </Fragment>
    )
}

export default HelloWorld;
