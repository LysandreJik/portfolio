import React from 'react'
import "./theme/Banner.css"

import JS from './icons/javascript.png';
import Matlab from './icons/matlab.png';
import Node from "./icons/node.png";
import Python from "./icons/python.png";
import Pytorch from "./icons/pytorch.png";
import ReactIcon from './icons/react.png';
import ReduxIcon from './icons/redux.png';
import Mail from "./icons/mail_white.svg";
import LinkedIn from "./icons/linkedin_white.svg";
import Github from "./icons/github_white.svg";

export default class Banner extends React.Component{
    render(){
        return(
            <div className="Banner">
                <div className="Banner__Contact">
                    <img src={Mail} onClick={() => window.open("mailto:lysandre.debut@reseau.eseo.com?Subject=Let's get in touch !")}/>
                    <img src={LinkedIn} onClick={() => window.open("https://www.linkedin.com/in/lysandredebut/")}/>
                    <img src={Github} onClick={() => window.open("http://github.com/LysandreJik")}/>
                </div>
                <div className="Banner__Title">
                    Hi, I'm Lysandre
                </div>
                <div className="Banner__Subtitle">
                    Part-time full stack web developer and full-time machine learning student and enthusiast
                </div>
                <div className="Banner__IconGrid">
                    <Icon index={0} src={Python} text={<a onClick={() => window.open("http://www.python.org")}>python</a>}/>
                    <Icon index={1} src={Pytorch} text={<a onClick={() => window.open("https://pytorch.org/")}>PyTorch</a>}/>
                    <Icon index={2} src={Matlab} text={<a onClick={() => window.open("https://www.mathworks.com/?s_tid=gn_logo")}>Matlab</a>}/>
                    <Icon index={3} src={JS} text={<a onClick={() => window.open("https://fr.wikipedia.org/wiki/ECMAScript")}>Javascript ES6</a>}/>
                    <Icon index={4} src={ReactIcon} text={<a onClick={() => window.open("https://reactjs.org/")}>ReactJS & React Native</a>}/>
                    <Icon index={5} src={ReduxIcon} text={<a onClick={() => window.open("https://redux.js.org/")}>Redux</a>}/>
                    <Icon index={6} src={Node} text={<a onClick={() => window.open("https://nodejs.org/en/")}>NodeJS</a>}/>
                </div>
            </div>
        )
    }
}

class Icon extends React.Component{

    state = {hover: false};

    constructor(props){
        super(props);

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    componentDidMount(){
        document.getElementById("icon"+this.props.index).addEventListener("mouseover", this.show);
        document.getElementById("icon"+this.props.index).addEventListener("mouseleave", this.hide);
    }

    show(){
        this.setState({hover: true});
    }

    hide(){
        this.setState({hover: false});
    }

    render(){
        return(
            <div id={"icon"+this.props.index} className="Banner__Icon">
                <img src={this.props.src}/>
                {this.state.hover ? <span className="Banner__IconText">{this.props.text}</span> : <span style={{fontSize: "150%"}}>{"\u00a0"}</span>}
            </div>
        )
    }

}
