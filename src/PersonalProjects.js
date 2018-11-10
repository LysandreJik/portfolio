import React from 'react'
import './theme/PersonalProjects.css'
import Dofus from './images/dofus.png';
import Combat from './images/combat.png';
import BotGraphs from './images/bot_graphs.PNG';
import BotSchedule from './images/bot_schedule.PNG';
import BotSpecs from './images/bot_specs.PNG';
import BotSpecs2 from './images/bot_specs_2.PNG';
import MainMenu from './images/main_menu.gif';
import BotMap from './images/bot_map.PNG';

export default class PersonalProjects extends React.Component{

    constructor(props){
        super(props);

        this.state = {openedProject: null};
    }

    render(){
        return(
            <div className="Category">
                <h1>Personal projects</h1>
                <div className="PersonalProjects__Text">
                    I post some of my projects on my <a href="www.github.com/LysandreJik">github</a>, some of which you
                    can see demos below.
                </div>

                <div className="PersonalProjects__Grid">
                    <div onClick={() => this.setState({openedProject: "delay"})}>Source addition & delay</div>
                    <div onClick={() => this.setState({openedProject: "datbot"})}>DatBot</div>
                    <div onClick={() => this.setState({openedProject: "specbot"})}>SpecBot</div>
                    <div onClick={() => this.setState({openedProject: "dofus"})}>Gym-like Dofus environment</div>
                </div>

                {this.state.openedProject ? <OpenedProject openedProject={this.state.openedProject}/> : ""}
            </div>
        )
    }
}

class OpenedProject extends React.Component{

    get specbot(){
        return(
            <div>
                SpecBot is still under construction.
            </div>
        )
    }

    get Gym(){
        return(
            <div>
                Gym is still under construction.
            </div>
        )
    }

    get delay(){
        return(
            <div>
                Delay is an desktop app made with Electron, React & Redux, with a NodeJS backend coupled with computation in Python.
            </div>
        )
    }

    get datbot(){
        return(
            <div className="OpenedProject__Body">
                <div className="OpenedProject__Text">
                    DatBot was created with two friends (<a href="http://github.com/Ugdha">Alexis</a> and <a href="https://github.com/BaptisteBdn">Baptiste</a>) and is my largest personal project to date. The goal is to create
                    an artificial life that could seamlessly integrate a video-game world (Dofus).
                    <br/>
                    Feel free to check out our <a href="http://github.com/ProjectBlackFalcon">github</a>
                </div>
                <img src={Dofus} width={600}/>


                <div className="OpenedProject__Text">
                    It has to imitate human behavior and be as efficient as a player behind his computer screen.
                    This project can be broken in several parts of several fields :
                    <ul className="OpenedProject__list">
                        <li>Networking by bypassing the client-server interface</li>
                        <li>Video game logic so that the agent acts flawlessly in its environment</li>
                        <li>Advanced fighting mechanics (only based on a state machine at the moment)</li>
                        <li>Data visualization and web-development so that we can check our agent's progress in the game</li>
                    </ul>
                </div>

                <img src={Combat} width={600}/>


                <div className="OpenedProject__Text">
                    Our goal was to learn as much as possible, while improving our personal knowledge. We therefore
                    chose to design this AI using different programming technologies : Python, Java, PHP, React, React Native & NodeJS.
                </div>

                <div className="OpenedProject__Text">
                    During this project, my work focused on the advanced fighting mechanics (in Java) and the data
                    visualization (using Web Technologies). A few images of the React Native app are available below.
                </div>
                <div className="OpenedProject__ImagesGrid">
                    <img className="OpenedProject__Image" src={MainMenu}/>
                    <img className="OpenedProject__Image" src={BotSpecs}/>
                    <img className="OpenedProject__Image" src={BotSpecs2}/>
                    <img className="OpenedProject__Image" src={BotGraphs}/>
                    <img className="OpenedProject__Image" src={BotSchedule}/>
                    <img className="OpenedProject__Image" src={BotMap}/>
                </div>

                <div className="OpenedProject__Text">
                    The agent needing to be integrated in its environment, it had to possess speech capabilities.
                    Some of my work revolved around enabling the agent's language processing, and designing it so that it kept true
                    to the players' speech behavior. I therefore decided to obtain as much data as possible from players,
                    and train a markov chain model on the data.
                    <br/>
                    <br/>
                    The data was obtained from the game forum by scraping
                    its data using LabVIEW. Here are some examples of sentences the model could generate (examples are in
                    french, the game-specific words are highlighted).
                    <br/>
                    <br/>
                    <br/>
                    <div className="Markov__Quote">Ne serait-ce qu'un retour des <r>serveurs mono compte</r> qui a fait partir beaucoup de <r>bl</r>.</div>
                    <div className="Markov__Quote">Même s'il n'est plus la au <r>tour du kolosso</r>, donc pas de <r>boost XP</r> et je joue avec 2 potes</div>
                    <div className="Markov__Quote">Le bug sur le <r>familier </r>? si tu joues depuis 2006 ça change rien</div>
                    <div className="Markov__Quote">En plus j'ai vu qu'il est possible davoir autre <r>tank</r> et <r>dps</r> pour jouer avec 2 potes</div>
                    <br/>
                    <br/>
                    <br/>
                    What is interesting here is that the model is making the same grammatical and spelling mistakes as the average Dofus player.
                </div>
            </div>
        )
    }

    render(){
        if(this.props.openedProject === "datbot"){
            return <div className="OpenedProject">{this.datbot}</div>
        }else if(this.props.openedProject === "delay"){
            return <div className="OpenedProject">{this.delay}</div>
        }else if(this.props.openedProject === "specbot"){
            return <div className="OpenedProject">{this.specbot}</div>
        }else if(this.props.openedProject === "dofus"){
            return <div className="OpenedProject">{this.Gym}</div>
        }
        return(
            <div className="OpenedProject">

            </div>
        )
    }
}
