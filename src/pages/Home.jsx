import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link,useNavigate,useParams } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3003/users");
            setUsers(response.data.reverse());
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
     const deleteUser= async (id)=>{
          await axios.delete(`http://localhost:3003/users/${id}`);
          loadUsers()
     }
    if( !users){
      return <h2>please wait loading data..... </h2>
    }
    else{
      return (
             
        <div className="container">
             <Table striped bordered hover  responsive className=" shadow-lg">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">UserName</th>
          <th scope="col">email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item,index)=>(
            <>
            <tr>
              <td scope="row">{index+1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td className="flex">
                <Link className="btn btn-primary mr-2 capitalize" to={`user/${item.id}`} >view</Link>
                <Link className="btn btn-outline-primary mr-2 capitalize" to={`/edituser/${item.id}`}>edit</Link>

                <Link className="btn btn-danger mr-2 capitalize" onClick={()=>deleteUser(item.id)}>delete</Link>
              </td>
            </tr>
            </>
          ))
        }
      </tbody>
    </Table>
        </div>
    );

    }

};

export default Home;
