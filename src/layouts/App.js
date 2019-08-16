import React from 'react'
// import User from '../pages/User';
import Footer from './Footer';
// import {Route,NavLink} from 'react-router-dom'

import Header from './Header'
// import Home from '../pages/Home'



export default class App extends React.Component{
    render(){
        return (
            <div className='App'>
                <Header/>
                {/* <User/> */}
                {/* <Home/> */}
                <Footer/>
            </div>
        )
    }
}