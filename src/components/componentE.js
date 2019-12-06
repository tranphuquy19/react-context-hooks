/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {useContext, useReducer} from 'react';
import {ObjectContext} from "../contexts/objectContext";

const ComponentE = () => {
    const {state, dispatch} = useContext(ObjectContext);
    let {number, str} = state;

    return (
        <div>
            <p>
                <b>{number} | {str}</b>
                <span>
                    <button onClick={() => dispatch({type: 'TANG'})}>Tang</button>
                    <button onClick={() => dispatch({type: 'GIAM'})}>GIAM</button>
                </span>
            </p>
        </div>
    );
};

export default ComponentE;

