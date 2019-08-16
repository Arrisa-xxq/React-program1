import React from 'react'
import follow from  '../assets/css/Follow.module.css'
import Cell from  '../components/Cell/cell'

export default class Follow extends React.Component{
    render(){
        return (
            <div className={follow.Follow}>
                <Cell/>
            </div>
        )
    }
}