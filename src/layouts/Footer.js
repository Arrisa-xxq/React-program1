import React from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import '../assets/css/Footer.css'

// import User from '../pages/User'
// import Error from '../pages/Error';

export default class Footer extends React.Component{
    render(){
        return (
            <div className="Footer">
                <div className="footbtn">
                    <ul>
                    <li className="home"><NavLink href="###" to='/home'></NavLink></li>
                    <li className="write"><a href="###"></a></li>
                    <li className="my"><NavLink href="###" to='/user'></NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}