import axios from 'axios';
import React from 'react'

const UserId = ({user}) => {
    console.log(user);
    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                <li>ID : {user.id}</li>
                <li>email : {user.email} </li>
                <li>username : {user.username}</li>
                <li>website : {user.website}</li>

            </ul>
        </div>
    )
}

export default UserId


export async function getServerSideProps({params}){
    const id = params.id;

    const { data } = await axios({
        method :'GET',
        url: `https://jsonplaceholder.typicode.com/users/${id}`
    });


    return {
        props : {
            user : data
        }
    }
}
