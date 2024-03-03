import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        website: ''
    });
const navigate=useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Do something with the user data (e.g., send it to the server)
        console.log('User data:', user);
     await axios.post("http://localhost:3003/users",user);
  navigate("/")
        // Reset the form after submission
        setUser({
            name: '',
            email: '',
            username: '',
            phone: '',
            website: ''
        });
    };

    return (
        <div>
            <h2 className="text-center py-4 capitalize">Add user</h2>
            <form onSubmit={handleSubmit}>
                <div className="sm:w-6/12 w-full shadow-lg mx-auto py-10">
                    <div className="w-9/12 mx-auto my-2">
                        <input type="text" className="w-full sm:w-9/12 py-3 px-3 capitalize rounded-lg sm:mx-auto md:mx-auto mx-auto border outline-none" placeholder="Enter your name" value={user.name} name="name" onChange={handleChange} />
                    </div>
                    <div className="w-9/12 mx-auto my-2">
                        <input type="text" className="w-full sm:w-9/12 py-3 px-3 capitalize rounded-lg sm:mx-auto md:mx-auto mx-auto border outline-none" placeholder="Enter your username" value={user.username} name="username" onChange={handleChange} />
                    </div>
                    <div className="w-9/12 mx-auto my-2">
                        <input type="email" className="w-full sm:w-9/12 py-3 px-3 capitalize rounded-lg sm:mx-auto md:mx-auto mx-auto border outline-none" placeholder="Enter your email" value={user.email} name="email" onChange={handleChange} />
                    </div>
                    <div className="w-9/12 mx-auto my-2">
                        <input type="text" className="w-full sm:w-9/12 py-3 px-3 capitalize rounded-lg sm:mx-auto md:mx-auto mx-auto border outline-none" placeholder="Enter your phone number" value={user.phone} name="phone" onChange={handleChange} />
                    </div>
                    <div className="w-9/12 mx-auto my-2">
                        <input type="text" className="w-full sm:w-9/12 py-3 px-3 capitalize rounded-lg sm:mx-auto md:mx-auto mx-auto border outline-none" placeholder="Enter your website" value={user.website} name="website" onChange={handleChange} />
                    </div>
                    <div className="w-9/12 mx-auto my-3">
                        <input type="submit" className="w-full sm:w-9/12 py-3 px-3 capitalize rounded-lg bg-blue-500 text-light sm:mx-auto md:mx-auto mx-auto border outline-none" value="Add user" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
