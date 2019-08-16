import React from 'react'
import style from  '../assets/css/Home.module.css'
import ReactSwipe from 'react-swipe';
import Cell from  '../components/Cell/cell'

export default class Home extends React.Component{
    render(){
        return (
            <div className={style['Home']}>
                 <ReactSwipe
                    className={style['carousel']}
                    swipeOptions={{ 
                        continuous: true,
                        startSlide: 2,
                        speed: 400,
                        auto: 3000,
                        stopPropagation: false,
                    }}
                >
                    <div className={style['a1']}>PANE 1</div>
                    <div className={style['a2']}>PANE 2</div>
                    <div style={{background:'#ccc'}}>PANE 3</div>
                </ReactSwipe>
                <Cell/>
            </div>
        )
    }
}