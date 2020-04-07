import React from 'react';
import {Spinner} from "react-bootstrap";

function LoadingComponent(props) {
    return (
        <div className="loading-area">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>

    );
}

export default LoadingComponent;
