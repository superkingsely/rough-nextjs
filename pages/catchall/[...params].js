import { useRouter } from 'next/router'
import React from 'react'

const Catchall = () => {
    const router=useRouter()
    const {params} = router.query
    console.log(params)
    if(params.length===1){
        return(
            <div>
                <h1>okay</h1>
            </div>
        )
    }else{
        return (
          <div>
             <h1>catch all</h1>
          </div>
        )
    }
}

export default Catchall
