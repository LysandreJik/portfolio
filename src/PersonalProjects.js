import React from 'react'
import './theme/PersonalProjects.css'

export default class PersonalProjects extends React.Component{
    render(){
        return(
            <div className="Category">
                Personal projects
                <div className="PersonalProjects__Text">
                    I post some of my projects on my <a href="www.github.com/LysandreJik">github</a>, some of which you
                    can see demos below.
                </div>

                <div className="PersonalProjects__Grid">
                    <div>Source addition & delay</div>
                    <div>DatBot</div>
                    <div>SpecBot</div>
                    <div>Gym-like Dofus environment</div>
                </div>
            </div>
        )
    }
}