import React from 'react'
import '../assets/css/Detail.module.css'
import zan from '../assets/img/zan.png'
import xing from '../assets/img/xing.png'
import fx from '../assets/img/fx.png'

export default class Detail extends React.Component{
    render(){
        return (
            <div className="Detail">
        <div className="nav">
          <ul>
            <li className="l-btn"></li>
          </ul>
        </div>
        <div className="content">
          <div className="header clear"><h2><img src="/img/head.png" alt=""/></h2><p>作者名字</p></div>
          <div className="cont">
            <h3>习近平1：弘扬宪法精神推动宪法实施</h3>
            <div className="time"><p>2019年12月04日 20:35:58 <span><img src={zan} alt=""/></span></p>
            </div>
            <div className="text-box">推进职业教育现代化座谈会12月2日在京召开。中共中央政治局常委、国务院总理李克强作出重要批示。批示指出：加快发展现代职业教育
              推进职业教育现代化座谈会12月2日在京召开。中共中央政治局常委、国务院总理李克强作出重要批示。批示指出：加快发展现代职业教育
            </div>
          </div>
        </div>
        <div className="foot-btn">
          <ul>
            <li className="say"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="zan"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="xing"><a href="">
              <i><img src={xing} alt=""/></i>
            </a></li>
            <li className="fx"><a href="">
              <i><img src={fx} alt=""/></i>
            </a></li>
          </ul>
        </div>
      </div>
        )
    }
}