import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apicomponent = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
            .then(res => setData(res.data))
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>setData(json))
    })
  return (
    <div>
      <h3>Api Demo</h3>
      <table border={'2'}>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Image</th>
        </tr>
        {
            data.map((i)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.category}</td>
                        <td><img src={i.image} height={'50px'} width={'50px'}/></td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Apicomponent
