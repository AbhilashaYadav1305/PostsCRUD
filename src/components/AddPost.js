import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AddPost = (props) =>{
    const [requestBody,setRequestBody] = useState({
        "userId":"",
        "title":"",
        "body":""
    });
    const handleChange=(name)=>(e) =>{
        let value = e.target.value;
        setRequestBody((prevState) => ({
         requestBody : {
             ...prevState.requestBody,
              [name]: value
         }
        }))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`,requestBody);
        console.log(response);
    }
return(
    <form onSubmit={handleSubmit} >
        <input type="text" id="userId" onChange={handleChange("userId")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
        <input type="text" id="body" onChange={handleChange("body")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
        <input type="text" id="title" onChange={handleChange("title")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
        <button type="submit">Edit</button>
        </form>
)
}

export default AddPost;