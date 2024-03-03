import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'

const User = () => {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    })
    const {id}=useParams();
    useEffect(()=>{
loadUser();
    },[]);
    const loadUser=async()=>{
     const data=await axios.get(`http://localhost:3003/users/${id}`);
     setUser(data.data);
    }
  return (
    <div>
        <Link to="/">back to home</Link>
        <div className="container">
             <Table striped bordered hover  responsive className=" shadow-lg">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">UserName</th>
          <th scope="col">email</th>
          <th scope="col">website</th>
        </tr>
      </thead>
      <tbody>
        {
          
            <>
            <tr>
              <td scope="row">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
            </>
         
        }
      </tbody>
    </Table>
        </div>
    </div>
  )
}

export default User