import React from 'react'
import style from  '../assets/css/Header.module.css'
import {NavLink,} from 'react-router-dom'




// import Error from '../pages/Error';

export default class Header extends React.Component{
    render(){
        return (
            <div className={style['Header']}>
                <div className={style['nav']}>
                    <ul>
                    <li><NavLink href="###" to="/home" activeClassName={style['header__active']}>首页</NavLink></li>
                    <li><NavLink href="###" to='/follow' activeClassName={style['header__active']}>关注</NavLink></li>
                    <li><NavLink href="###" to='/column' activeClassName={style['header__active']}>栏目</NavLink></li>
                    </ul>
                </div>

            </div>
            
        )
    }
}