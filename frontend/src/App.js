import React, {Component} from "react";
import {Route, BrowserRouter,Switch} from 'react-router-dom';

import Login from './Components/login';
import Register from './Components/Register';
import Home from './Components/Main/home';
import Profile from './Components/profile';
import Chat from './Components/chat';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
     }
  }



  render() { 
    return (
      <div className="container">
          <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/chat" component={Chat} />
                </Switch>
          </BrowserRouter>
       </div>
    );
  }
}
 

export default App;
