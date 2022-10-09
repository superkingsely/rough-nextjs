import { useRouter } from 'next/router'
import React from 'react'

const Allroutes = () => {
  const router=useRouter()
  const {params=[]}=router.query
  console.log(params)
  if (params.length===2){
    return(
      <div>
        <h1>okay okay</h1>
      </div>
    )
  }
  return (
    <div>
        <h1>omo</h1>
    </div>
  )
}

export default Allroutes
