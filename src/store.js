/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */

import React, {useReducer, useState} from 'react';
import {NumberContext} from "./contexts/numberContext";
import {StringContext} from "./contexts/stringContext";
import {ObjectContext} from "./contexts/objectContext";
import {objectInit, objectReducer} from "./reducers/objectReducer";
import {useAudio} from "react-use";
import {PlayerContext} from "./contexts/playerContext";

const Store = ({children}) => {
    const [number, setNumber] = useState(0);
    const [str, setStr] = useState('ahihi');
    const [userState, userDispatch] = useReducer(objectReducer, objectInit);
    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        autoPlay: false,
    });

    return (
        <NumberContext.Provider value={[number, setNumber]}>
            <StringContext.Provider value={[str, setStr]}>
                <ObjectContext.Provider value={{userState, userDispatch}}>
                    <PlayerContext.Provider value={{audio, state, controls, ref}}>
                        {children}
                    </PlayerContext.Provider>
                </ObjectContext.Provider>
            </StringContext.Provider>
        </NumberContext.Provider>
    );
};

export default Store;

