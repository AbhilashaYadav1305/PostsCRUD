import React, { useEffect, useState } from 'react';
import axios from 'axios';
import history from "../Utils/history";

const UpdatePost = (props) => {
    const [requestBody, setRequestBody] = useState({
        "id": "",
        "userId": "",
        "title": "",
        "body": ""
    });
    let idQueryParam = props.match.params.planId;
    const handleChange = (name) => (e) => {
        let value = e.target.value;
        setRequestBody((prevState) => ({
            requestBody: {
                ...prevState.requestBody,
                [name]: value
            }
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(requestBody);
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${idQueryParam}`, requestBody);
        console.log(response);
    }


    const redirect = () => {
        history.push("/")
    }
    return (
        <form onSubmit={handleSubmit} class="display-flex container">
            <div>
                <label class="label">User Id :</label>
                <input type="text" id="userId" onChange={handleChange("userId")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
            </div>
            <div>
                <label class="label">Content :</label>
                <input type="text" id="body" onChange={handleChange("body")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
            </div>
            <div>
                <label class="label">Title :</label>
                <input type="text" id="title" onChange={handleChange("title")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
            </div>
            <div class="button">
                <button type="submit" class="button">Edit</button>
                <button type="cancel" class="button" onClick={redirect}>Cancel</button>
            </div>
        </form>
    )
}

export default UpdatePost;