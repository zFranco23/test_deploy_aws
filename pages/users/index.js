import axios from 'axios'
import React from 'react'
import Link from 'next/link';

const Users = ({ allUsers }) => {
    console.log(allUsers);
    return (
        <div>
            Users pe chato

            <ul>
                {
                    allUsers.map((user,i)=>(
                        <li key={i}>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users


export async function getServerSideProps (){

    const { data } = await axios({
        method:'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    });

    return {
        props : {
            allUsers : data
        }
    }
}
