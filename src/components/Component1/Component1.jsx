
import React from 'react';
import PropTypes from 'prop-types';
import "./Component1.css"

export const Component1 = props => 
{
    const variable1 = props.variable1;
    const variable2 = props.variable2;

    const onClick = () => {};

    return (<>
    <div>
        <a>Text</a>
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