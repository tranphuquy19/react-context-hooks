/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */

import React, {useReducer, useState} from 'react';
import {NumberContext} from "./contexts/numberContext";
import {StringContext} from "./contexts/stringContext";
import {ObjectContext} from "./contexts/objectContext";
import {objectInit, objectReducer} from "./reducers/objectReducer";

const Store = ({children}) => {
    const [number, setNumber] = useState(0);
    const [str, setStr] = useState('ahihi');
    const [state, dispatch] = useReducer(objectReducer, objectInit);

    return (
        <NumberContext.Provider value={[number, setNumber]}>
            <StringContext.Provider value={[str, setStr]}>
                <ObjectContext.Provider value={{state, dispatch}}>
                    {children}
                </ObjectContext.Provider>
            </StringContext.Provider>
        </NumberContext.Provider>
    );
};

export default Store;

