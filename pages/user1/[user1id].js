import React from 'react'

const User = ({users}) => {
    console.log(users)
  return (
    <div>
       <h1>welcome to user details {users.id}</h1>
    </div>
  )
}

export default User

export const getStaticPaths=async()=>{
const res = await fetch('http://localhost:3000/api/hello1')
const data = await res.json()
const paths=data.map(data=>{
    return{
        params:{user1id:`${data.id}`}
    }
})

return{
    paths,
    fallback:false
}}

export const getStaticProps=async(pathitem)=>{
    const {params}=pathitem
    const res=await fetch(`http://localhost:3000/api/hello1/${params.user1id}`)
    const data=await res.json()

    return{
        props:{
            users:data
        }
    }
}
