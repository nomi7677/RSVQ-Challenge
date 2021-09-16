import React from 'react';
import header from './Components/header';
import quote from './Components/quote';
import listOfQuotes from './Components/listOfQuotes';
import NavBar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';



function App() {
 
return (
 
    <Router>
     

      <div className='App'>
      <NavBar />
        
      <div id="page-body">
        <Switch>
        <Route path="/" component={header} exact />
        <Route path="/quote" component={quote} />
        <Route path="/listOfQuotes" component={listOfQuotes} />

        </Switch>
        </div>
        
      </div>
      </Router>
  );
}

export default App;
