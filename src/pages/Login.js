import React from 'react'
import style from  '../assets/css/Login.module.css'
import {Link} from 'react-router-dom'

export default class Login extends React.Component{
    render(){
        return (
            <div className={style['content']}>
        <p className="fhbtn"><a href="###"></a></p>
        <h1></h1>
        <div className={style['login-box']}>
          <p className={style['lsolid']}></p>
          <div className={style['login']}>
          <Link href="###" to='/login'>登录</Link>
            <span></span>
            <Link href="###" to='/reg'>注册</Link>
          </div>
          <p className={style['rsolid']}></p>
        </div>
        <ul>
          <li className={style['lifirst']}>
            <input type="text" defaultValue=""/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text" defaultValue=""/>
            <span>密码</span>
          </li>
        </ul>
        <div className={style['footbox']}>
          <input type="button" value="登 录" className={style['login-btn']}/>
          <a href="" className={style['tishi']}>忘记密码？</a>
        </div>
      </div>
        )
    }
}