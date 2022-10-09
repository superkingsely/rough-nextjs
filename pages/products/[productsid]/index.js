import React from 'react'
import {useRouter} from 'next/router'

const proddetaillist = () => {
  const router=useRouter()
  const id=router.query.productsid
  console.log(router)
  return (
    <div>
      <h1>welcome to prod {`${id}`}</h1>
    </div>
  )
}

export default proddetaillist
