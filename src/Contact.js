import React from 'react'
import './theme/Contact.css'
import LinkedIn from './icons/linkedin.svg';
import Github from './icons/github.svg';
import Mail from './icons/mail.svg';

export default class Contact extends React.Component{
    render(){
        return(
            <div className="Contact">
                <img src={Mail} onClick={() => window.open("mailto:lysandre.debut@reseau.eseo.com?Subject=Let's get in touch !")}/>
                <img src={LinkedIn} onClick={() => window.open("https://www.linkedin.com/in/lysandredebut/")}/>
                <img src={Github} onClick={() => window.open("http://github.com/LysandreJik")}/>
            </div>
        )
    }
}
