import React from 'react'
import './TheStack.css'

function TheStack() {
    return (
        <>
            <div className="container">
                <h1>The Stack</h1>
                <div className="stack wrapper">
                    <div className="box"></div>
                    <div className="stack wrapper">
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="box"></div>
                </div>
            </div>
        </>
    );
}
export default TheStack