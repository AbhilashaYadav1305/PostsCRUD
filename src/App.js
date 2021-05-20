import React from 'react';
import {Router, Route, Switch}  from "react-router-dom";
import PostDisplay from "./components/PostDisplay"
import AddPost from "./components/AddPost"
import UpdatePost from "./components/UpdatePost"
import './App.css';
import history from "./Utils/history";

function App() {
  return (
    <Router history = {history} forceRefresh = {true}>
      <Switch >
        <Route exact path="/addPost" render={() => <AddPost/>} />
        <Route  path="/updatePost/:planId"   render={(props) => <UpdatePost {...props}/>}/>
        <Route  path="/" render={() => <PostDisplay/>} />
      </Switch>
    </Router>
  );
}

export default App;
