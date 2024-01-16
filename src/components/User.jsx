import React from 'react'
import styled from 'styled-components'
const User = () => {
  return (
    <UserCard>
        <div className='card'>
            <div className='user-profile'>
                <img src='https://img.freepik.com/free-vector/head-man_1308-33466.jpg?w=740&t=st=1705392038~exp=1705392638~hmac=27ded0ed3f7ed493ab0a2ff427c7523488600ba32f1b42beb3843408b143e415'></img>
            </div>
            <div className='username'>Aamir Hannan</div>
            <div className='email'>aamirhannan08@gmail.com</div>
        </div>
    </UserCard>
  )
}

export default User

const UserCard = styled.main`
    .card{
        display: flex;
        align-items: center;
        background-color: gray;
        width: fit-content;
        :hover{
            background-color: cyan;
        }
    }
    img{
        width: 50;
        height: 50px;
        border-radius: 50%;
    }
    .username{
        padding-left: 20px;
        font-weight: bold;
    }
    .email{
        padding-left: 30px;
        padding-right: 10px;
    }

`;

