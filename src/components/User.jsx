import React from 'react'
import styled from 'styled-components'
const User = (props) => {
  return (
    <UserCard>
        <div className='card'>
            <div className='user-profile'>
                <img src='https://img.freepik.com/free-vector/head-man_1308-33466.jpg?w=740&t=st=1705392038~exp=1705392638~hmac=27ded0ed3f7ed493ab0a2ff427c7523488600ba32f1b42beb3843408b143e415'></img>
            </div>
            <div className='username'>{props.name}</div>
            <div className='email'>{props.email}</div>
        </div>
    </UserCard>
  )
}

export default User

const UserCard = styled.main`
    .card{
        display: flex;
        align-items: center;
        /* background-color: lightgray; */
        width: fit-content;
    }
    
    img{
        width: 50;
        height: 50px;
        border-radius: 50%;
    }
    .username{
        padding-left: 20px;
        font-weight: bolder;
    }
    .email{
        padding-left: 30px;
        padding-right: 10px;
    }

`;

