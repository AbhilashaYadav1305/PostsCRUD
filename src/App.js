import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostDisplay from "./components/PostDisplay"
import AddPost from "./components/AddPost"
import UpdatePost from "./components/UpdatePost"
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={PostDisplay} />
      <Switch>
        <Route exact path="/addPost" component={AddPost} />
        <Route exact path="/updatePost" component={UpdatePost} />
      </Switch>
    </Router>
  );
}

export default App;
