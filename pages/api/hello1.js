import {data} from '../../data/data'
// import React from 'react'

const Helloapi = (req,res) => {
 res.status(200).json(data)
}

export default Helloapi
