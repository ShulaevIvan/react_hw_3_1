import React from 'react';
import Star from '../Star/Star';

const Stars = (props) => {
    return (
        <React.Fragment>
            <ul className="card-body-stars">
                <Star count={props.starCount}></Star>
            </ul>
        </React.Fragment>
    )
}

export default Stars;