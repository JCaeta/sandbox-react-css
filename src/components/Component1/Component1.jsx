
import React from 'react';
import PropTypes from 'prop-types';
import "./Component1.css"
import image1 from '../../images/8.png';

export const Component1 = props => 
{
    return (<>
        <div>
            <img 
                src={image1}>
            </img>
        </div>
    </>);
}

Component1.defaultProps =
{
    variable1: 1,
    variable2: "variable2",
}

Component1.propTypes = 
{
    variable1: PropTypes.number,
    variable2: PropTypes.oneOf(['var2', 'variable2', 'v2']),
}