import React, { useEffect, useState } from 'react';
import axios from 'axios';
import history from "../Utils/history"

const AddPost = (props) => {
    const [requestBody, setRequestBody] = useState({
        "userId": "",
        "title": "",
        "body": ""
    });
    const handleChange = (name) => (e) => {
        let value = e.target.value;
        setRequestBody((prevState) => ({
            requestBody: {
                ...prevState.requestBody,
                [name]: value
            }
        }))
    }

    const redirect = () => {
        history.push("/")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, requestBody);
        console.log(response);
    }
    return (
        <form onSubmit={handleSubmit} class="display-flex container">
            <div>
                <label class="label">User Id :</label>
                <input type="text" id="userId" onChange={handleChange("userId")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
            </div>
            <div>
                <label class="label">Comment :</label>
                <input type="text" id="body" onChange={handleChange("body")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
            </div>
            <div>
                <label class="label">Title :</label>
                <input type="text" id="title" onChange={handleChange("title")} style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }} />
            </div>
            <div>
                <button type="submit" class="button" >Add</button>
                <button type="cancel" class="button" onClick={redirect}>Cancel</button>
            </div>
        </form>
    )
}

export default AddPost;