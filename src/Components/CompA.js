import React, {createContext } from 'react'
import CompB from './CompB';

const Data=createContext();
const CompA = () => {
    const name="Tarun"
    return(
        <div>CompB is called in this (CompA)
        <Data.Provider value={name}>
            <CompB/>
        </Data.Provider>
        </div>
    )
}
export default CompA;
export {Data};
