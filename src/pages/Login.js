import React from 'react'
import login from  '../assets/css/Login.module.css'

export default class Login extends React.Component{
    render(){
        return (
            <div className={login.content}>
        <p className="fhbtn"><a href="mydoc_m.html"></a></p>
        <h1></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <a href="###">登录</a>
            <span></span>
            <a href="###">注册</a>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <li className="lifirst">
            <input type="text" defaultValue=""/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text" defaultValue=""/>
            <span>密码</span>
          </li>
        </ul>
        <div className="footbox">
          <input type="button" value="登 录" className="login-btn"/>
          <a href="" className="tishi">忘记密码？</a>
        </div>
      </div>
        )
    }
}