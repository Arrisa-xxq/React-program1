import React from 'react'
import '../assets/css/Header.css'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Follow from '../pages/Follow';
import Column from '../pages/Column';
import Home from '../pages/Home';



// import Error from '../pages/Error';

export default class Header extends React.Component{
    render(){
        return (
            <div className='Header'>
                <div className="nav">
                    <ul>
                    <li className='active'><NavLink href="###" to="/home" activeClassName='header-nav--active'>首页</NavLink></li>
                    <li><NavLink href="###" to='/follow' activeClassName='header-nav--active'>关注</NavLink></li>
                    <li><NavLink href="###" to='/column' activeClassName='header-nav--active'>栏目</NavLink></li>
                    </ul>
                </div>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/follow' component={Follow}/>
                    <Route path='/column' component={Column}/>
                    </Switch>
            </div>
            
        )
    }
}