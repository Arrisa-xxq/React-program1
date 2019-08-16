import React from 'react'
import column from  '../assets/css/Column.module.css'

import Cell from '../components/Cell/cell'

export default class Column extends React.Component{
    render(){
        return (
            <div className={column.Column}>
                {/* 传给props一个自定义属性,在调用的组件内接收，做条件渲染 */}
                <Cell noIndex/>  
            </div>
        )
    }
}