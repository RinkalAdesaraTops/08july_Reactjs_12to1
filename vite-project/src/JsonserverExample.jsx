import React, { useEffect, useState } from 'react'
import axios from 'axios'
const JsonserverExample = () => {
  const [id,setId] = useState("")
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const [userdata,setUserdata] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const disp =()=>{
      axios.get("http://localhost:4000/users")
      .then((res)=>setUserdata(res.data))
    }
    useEffect(()=>{
      disp()
    },[])
    const saveData = (e)=>{
        e.preventDefault()
        if(id != ''){
          //update
          axios.put("http://localhost:4000/users/"+id,data)
            .then((res)=>console.log(res))
        } else {
          //insert
          axios.post("http://localhost:4000/users",data)
            .then((res)=>console.log(res))
        }
        
            disp()
            setData({
              name:"",
              age:""
          })
    }
    const delData = (id)=>{
      axios.delete("http://localhost:4000/users/"+id)
        .then((res)=>console.log(res))
        disp()
    }
    const editData = (id)=>{
      setId(id)
      axios.patch("http://localhost:4000/users/"+id)
        .then((res)=>setData(res.data))
       
    }
  return (
    <div>
      <h3>Json server example</h3>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={data.name} />
        <br /><br />

        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" onChange={handleChange} value={data.age} />
        <br /><br />
        <input type="submit" value='Save Data' />
        <br /><br />
      </form>
      <br /><br />
      <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
        {
          userdata.map((i)=>{
              return (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td><button type="button" onClick={()=>editData(i.id)}>Edit</button><button type="button" onClick={()=>delData(i.id)}>DELETE</button></td>
                </tr>
              )
          })
        }
      </table>
    </div>
  )
}

export default JsonserverExample
