import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from '../components/About/About'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Profile from '../components/Profile/Profile'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                   </Switch>
                
            </Router>
        )
    }
}
export default Routes;