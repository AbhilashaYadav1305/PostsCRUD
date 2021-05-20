import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PostDisplay = (props) => {

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchKeyword, setSearchKeyword] = useState([])
  const header =
  {
    "userId": "User Id",
    "title": "Title",
    "id": "Id",
    "body": "Body",
  }




  const handleEdit = () => {

  }
  const handleDelete = () => {

  }

  const handleSearch = (searchKey) => {
    let tempData = data.map((dataObj, i) => {
      let isfound = Object.entries(dataObj).filter((obj) => obj.id === searchKey)
      console.log(isfound)
    })

    console.log(tempData)
    // setFilteredData(tempData);
  }

  useEffect(async () => {
    const config = {
      headers: {
        'content-type': 'application/json'
      }
    }

    const data = await axios.get('https://jsonplaceholder.typicode.com/posts', config);
    setData(data.data);
  }, [])

  return (
    <div>
      <input type="text"></input><i class="fas fa-search" onClick={handleSearch}>Search</i>
      <table style={{ border: "1px solid black", width: "80%", marginLeft: "20px", marginTop: "20px", marginBottom: "50px" }}>
        <tr>
          {Object.entries(header).map((value) => <th style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}>{value[1]}</th>)}
        </tr>
        {/* {Object.entries(header).map((head) => {
          data.map((dataObj) => {
         
          })
            < td ></td>})
        } */}
        {
          filteredData.length > 0 ? filteredData.map((dataObj) => {
            return <tr>
              {Object.keys(header).map((headKey) => <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}>{dataObj[headKey]}</td>)}
              <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}><i class="fas fa-edit" onClick={handleEdit}>Edit</i></td>
              <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}><i class="fas fa-trash-alt" onClick={handleDelete}>Delete</i></td>
            </tr>
          }) :
            data.map((dataObj) => {
              return <tr>
                {Object.keys(header).map((headKey) => <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}>{dataObj[headKey]}</td>)}
                <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}><i class="fas fa-edit" onClick={handleEdit}>Edit</i></td>
                <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}><i class="fas fa-trash-alt" onClick={handleDelete}>Delete</i></td>
              </tr>
            })
        }
        {/* {
          Object.keys(header).map((headKey) => {
            data.map(() =>{

            })
          })
        } */}
      </table>
    </div>
  )


}
export default PostDisplay;