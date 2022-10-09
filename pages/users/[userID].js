import Link from 'next/link'
import React from 'react'

const User = ({user}) => {
  return (
    <div className='ms-3'>
       <h1>welcome to user {user.name}</h1>
       <h2>{user.details}</h2>
       <Link href={'/users'} passHref>
       <button className='btn btn-info'> back to users</button>
       </Link>
    </div>
  )
}

export default User

export const getStaticPaths=async()=>{
    const res=await fetch('http://localhost:5000/data')
    const data=await res.json()
    const paths=data.map(user=>{
        return{
            params:{
                userID:`${user.id}`
            }
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const {params}=context
    const res=await fetch(`http://localhost:5000/data/${params.userID}`)
    const data=await res.json()
    return{
        props:{
            user:data
        }
    }
}
