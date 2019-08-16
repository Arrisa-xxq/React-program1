import React from 'react';
import cell from  './assets/css/cell.module.css'

export default class Cell extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div className={cell.Cell}>
                {
                    [0,1,2,3,4,5,6,7,8,9,10].map((index)=>{
                        return (
                            <li key={index}>
                                <a href="###">
                                    {
                                        this.props.noIndex ? 
                                        <h2>xx</h2> :
                                        <h2>2.xx</h2>
                                    }
                                    <p>0000</p>
                                </a>
                            </li>)
                    })
                }
            </div>
        )
    }
} 