import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UpdatePost = (props) =>{
    const [requestBody,setRequestBody] = useState({
        "id":"",
        "userId":"",
        "title":"",
        "body":""
    });
  let idQueryParam = props.match.params.planId;
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
        console.log(requestBody);
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${idQueryParam}`,requestBody);
        console.log(response);
    }
    console.log()
return(
    <form onSubmit={handleSubmit} >
        <input type="text" id="id" onChange={handleChange("id")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
        <input type="text" id="userId" onChange={handleChange("userId")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
        <input type="text" id="body" onChange={handleChange("body")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
        <input type="text" id="title" onChange={handleChange("title")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
        <button type="submit">Edit</button>
        </form>
)
}

export default UpdatePost;