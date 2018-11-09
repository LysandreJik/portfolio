import React from 'react'
import "./theme/Banner.css"

export default class Banner extends React.Component{
    render(){
        return(
            <div className="Banner">
                <div className="Banner__Title">
                    Hi, I'm Lysandre
                </div>
                <div className="Banner__Subtitle">
                    Part-time full stack web developer and full-time machine learning student and enthusiast
                </div>
            </div>
        )
    }
}