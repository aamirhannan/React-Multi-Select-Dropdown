import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import User from './User';


const Multicheck = () => {
const [options, setOptions]=useState([User,User,User ])
  return (
    <>
    <h1>Multicheck</h1>
    <Multiselect options={options} isObject={false} />    
    </>
)
}

export default Multicheck