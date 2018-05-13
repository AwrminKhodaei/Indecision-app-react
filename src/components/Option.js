import React from 'react';

const Option = (props) =>(
        <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
            
            <button 
            className="small-buttons button--link"
            onClick={() =>{
                props.handleDeletOption(props.optionText);
            }}>Remove</button>
        </div>

    );
export default Option;