import React from 'react'
import './theme/Contact.css'
import LinkedIn from './icons/linkedin.svg';
import Github from './icons/github.svg';
import Mail from './icons/mail.svg';

export default class Contact extends React.Component{

    state = {opacity: 0};

    componentDidMount(){
        window.addEventListener('scroll', () => this.setState({opacity:  (-200 + window.pageYOffset)/200}));
    }

    render(){
        return(
            <div className="Contact" style={{opacity: this.state.opacity}}>
                <img src={Mail} onClick={() => window.open("mailto:lysandre.debut@reseau.eseo.com?Subject=Let's get in touch !")}/>
                <img src={LinkedIn} onClick={() => window.open("https://www.linkedin.com/in/lysandredebut/")}/>
                <img src={Github} onClick={() => window.open("http://github.com/LysandreJik")}/>
            </div>
        )
    }
}
