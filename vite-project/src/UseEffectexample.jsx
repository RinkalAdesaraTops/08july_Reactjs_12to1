import React, { useEffect, useState } from 'react'

const UseEffectexample = () => {
    const [name,setName] = useState("abc")
    useEffect(()=>{
        //Api calling -- this hooks use
        setTimeout(()=>{
            setName("Testing")
        },3000)
    })
  return (
    <div>
      <h3>Use effect Example</h3>
      <h4>Name is ---  {name}</h4>

    </div>
  )
}

export default UseEffectexample
