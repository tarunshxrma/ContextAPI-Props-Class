import React, {useContext} from 'react'
import {Data} from './CompA'
import CompE from './CompE'

const CompD  = ()=>{
    const data=useContext(Data)
    return (
        <div>CompE is called in this (CompD)
            <h1>Finally in CompD we get Data (the name passed in CompA): {data} </h1>
            <CompE get={data}/>
        </div>
    )
}
export default CompD
