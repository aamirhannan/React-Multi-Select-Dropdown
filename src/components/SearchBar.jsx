import React,{useState} from 'react'
import styled from "styled-components"
import Select from 'react-select'
import User from './User'

  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'mango', label:'Mango'},
  { value: 'magarati', label:'Magarati'},
  {value:'guava', label:"Guava"}
]  
const SearchBar = () => {
  return (
    <MainContainer>
    <div className='main-container'>
        <div className='top-heading'>
            <h1>Pick User</h1>
        </div>
        <Select 
            options={options}   
            isMulti
            styles={{
            
            control: (baseStyles, state) => ({
                ...baseStyles,
                // borderColor: state.isFocused ? 'red' : 'gray',
                width:500,
                borderStyle:'none'
                }),
            }}
            

        />
    </div>
    </MainContainer>
  )
}

export default SearchBar

const MainContainer = styled.main`
    .main-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .top-heading{
        color: blue;
    }
    
    .input-text{
        border-style: none;
    }
    

`;










