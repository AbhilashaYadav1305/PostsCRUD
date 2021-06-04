import React, { useEffect, useState } from 'react';
import axios from 'axios';
import history from "../Utils/history";
import Modal from '../Utils/Modal';


const PostDisplay = (props) => {

  const [data, setData] = useState([])
  const [fetchedData, setfetchedData] = useState([])
  const [searchKeyword, setSearchKeyword] = useState("");
  const [, setdeleteResponseMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idTodelete, setIdToDelete] = useState("");
  let alert = "Are you sure?";
  const header =
  {
    "userId": "User Id",
    "title": "Title",
    "id": "Id",
    "body": "Body",
  }

  const handleEdit = (id) => (e) => {
    e.preventDefault()
    history.push("/updatePost/" + id);

  }
  const handleDelete = (type) => async (e) => {
    e.preventDefault();
    if (type === "ok") {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${idTodelete}`);
      if (!response.data) {
        setdeleteResponseMessage(`Post ${idTodelete} deleted successfully`);
      }
    }
    setIdToDelete("");
    setShowModal(false);
  }

  const handleModal = (id) => async (e) => {
    e.preventDefault();
    setIdToDelete(id);
    setShowModal(true);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    history.push("/addPost");
  }
  const handleSearch = (e) => {
    if (searchKeyword !== "") {
      let tempData = [];
      data.map((dataObj) => {
        let isfound = Object.keys(header).filter((head) => (dataObj[head].toString().includes(searchKeyword.toString())))
        if (isfound.length > 0) return tempData.push(dataObj)
      })
      setData(tempData);
    } else setData(fetchedData);
  }

  const handleChange = (e) => {
    setSearchKeyword(e.target.value)
  }

  useEffect(async () => {
    const config = {
      headers: {
        'content-type': 'application/json'
      }
    }
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts', config);
    setfetchedData(data.data);
    setData(data.data)
  }, [])

  return (

    <div class="container">
      <div class="display-flex">
        <div><input type="text" onChange={handleChange} value={searchKeyword}></input><i class="fas fa-search" onClick={handleSearch}>Search</i></div>
        <button onClick={handleAdd}>Add</button>
      </div>
      <table style={{ border: "1px solid black", width: "80%", marginLeft: "20px", marginTop: "20px", marginBottom: "50px" }}>
        <tr>
          {Object.entries(header).map((value) => <th style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}>{value[1]}</th>)}
        </tr>
        {
          data.map((dataObj, index) => {
            return <tr>
              {Object.keys(header).map((headKey) => <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}>{dataObj[headKey]}</td>)}
              <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}><i class="fas fa-edit" onClick={handleEdit(dataObj["id"])}>Edit</i></td>
              <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}><i class="fas fa-trash-alt" onClick={handleModal(dataObj["id"])} >Delete</i></td>
            </tr>
          })
        }

      </table>
      <Modal handleClose={handleDelete} show={showModal} msg={alert} />
    </div>
  )
}
export default PostDisplay;