import Link from 'next/link'
import React from 'react'

const Users = ({users}) => {
  return (
    <div className='ms-3'>
        <h1>users 🙉  home</h1>
        
            {
                users.map(user=>(
                    <div key={user.id}>
                        <Link href={`/users/${user.id}`} passHref>
                        <h2>{user.name}</h2>
                        </Link>
                    </div>
                ))
            }

        <Link href={'/'} passHref>
        <button className="btn btn-info">back to home</button>
        </Link>
        
    </div>
  )
}

export default Users
export const getStaticProps=async()=>{
    const res=await fetch('http://localhost:5000/data')
    const data=await res.json()

    return{
        props:{
            users:data
        }
    }
}
