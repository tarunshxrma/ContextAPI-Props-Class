import React from 'react'
import CompC from './CompC'

const CompB = () =>{
    return(
        <div>CompC is called in this(CompB)
            <CompC />
        </div>
    )
}
export default CompB