import React, { Fragment, useState } from 'react';
import './HelloWorld.css';

function HelloWorld(props) {
    const [isTrue, setIsTrue] = useState(false)

    return (
        // <hr/> - horizontal rule
        <Fragment>
            <hr/>
            <h1 className='h1-green'>{props.msg}</h1>
            <hr/>
            {
                isTrue ? 
                    <p>Is true</p> :
                    <p>Is false</p>
            }
            {
                isTrue && 
                <Fragment>
                        <hr/>
                        <p>The current value of isTrue is true</p>
                    </Fragment>
            }
            <hr/>
            <button htef="#!" className="btn btn-outline-secondary" onClick={ () => { setIsTrue(!isTrue) }}>Toggle isTrue</button>
        </Fragment>
    )
}

export default HelloWorld;
