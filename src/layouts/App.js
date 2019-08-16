import React from 'react'
import Footer from './Footer';
import {Route,Switch} from 'react-router-dom'

import Header from './Header'
import Home from '../pages/Home'
import Column from '../pages/Column';
import Login from '../pages/Login';
import Reg from '../pages/Reg';
import Detail from '../pages/Detail';
import Follow from '../pages/Follow';
import User from '../pages/User';



export default class App extends React.Component{
    render(){
        return (
            <div className='App'>
                <Header/>
                {/* <User/> */}
                {/* <Home/> */}
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/follow' component={Follow}/>
                    <Route path='/column' component={Column}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/reg' component={Reg}/>
                    <Route path='/detail' component={Detail}/>
                    <Route path='/follow' component={Follow}/>
                    <Route path='/user' component={User}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}