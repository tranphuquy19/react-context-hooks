/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */

import React, {useState} from 'react';
import {NumberContext} from "./contexts/numberContext";
import {StringContext} from "./contexts/stringContext";

const Store = ({children}) => {
    const [number, setNumber] = useState(0);
    const [str, setStr] = useState('ahihi');

    return (
        <NumberContext.Provider value={[number, setNumber]}>
            <StringContext.Provider value={[str, setStr]}>
                {children}
            </StringContext.Provider>
        </NumberContext.Provider>
    );
};

export default Store;

