import logo from './logo.svg';
import './App.css';
import React from 'react';
import UploadForm from './FileUpload';
import Home from './Home';
import Navigator from './Navbar';
import {BrowserRouter as Router,Route,Switch} from  'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navigator />
      <Switch>
        <Route path='/batchProcessing' component={UploadForm}></Route>
        <Route path='/' exact component={Home}></Route>
     
      </Switch>
      </Router>
    </div>
  );
}

export default App;
