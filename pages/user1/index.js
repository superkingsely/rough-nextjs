import Link from 'next/link'
import React from 'react'
// import { getStaticProps } from '../users'

const Users1 = ({users}) => {
    console.log(users)
  return (
    <div>
      <h1>welcome to users one</h1>

        <div>
            {users.map(user=>(
                <div className='h1' key={user.id}>
                    <Link href={`/user1/${user.id}`} >
                        <a >
                            {user.name}
                        </a>
                    </Link>
                </div>
            ))}
        </div>

      <Link href={'/'} passHref>
        <button className="btn btn-outline-primary">back home</button>
      </Link>
    </div>
  )
}

export default Users1

export const getStaticProps=async()=>{

const res = await fetch('http://localhost:3000/api/hello1')
const data = await res.json()


    return{
        props:{
            users:data
        }
    }
}
