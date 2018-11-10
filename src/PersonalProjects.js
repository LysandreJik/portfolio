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

import FetchSignal from './images/fetch_signal.gif';
import Generating from './images/generating.gif';
import Placing from './images/placing_moving.gif';
import PlacingOwn from './images/placing_own.gif';

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
            <div className="OpenedProject__Body">
                <div className="OpenedProject__Text">
                    "SpecBot" is still under construction.
                    <br/>
                    <br/>
                    SpecBot is a data-visualization website in order to see the evolution of prices in the Dofus video game.
                    With the evolution of the market prices, the goal is to create algorithms that can predict the evolution
                    and variation of different items' values.
                </div>
            </div>
        )
    }

    get Gym(){
        return(
            <div className="OpenedProject__Body">
                <div className="OpenedProject__Text">
                    "Gym-like dofus environment" is still under construction.
                    <br/>
                    <br/>
                    This algorithm represents en environment organized in a similar fashion than that of OpenAI's gym.
                    It is based on a single game, Dofus, and more particularly its combat system. This environment focuses
                    on replicating the model of the game, so that at any given state, the user can know which actions it
                    can do.
                    <br/>
                    <br/>
                    The goal of this algorithm is to represent the model of a Reinforcement Learning algorithm, which
                    would then learn to play and win at Dofus' combat system. I am currently exploring Deep Reinforcement
                    Learning policies which would best fit an agent, especially off-policy methods (deep Q-learning),
                    but I am also considering simple methods such as ε-greedy methods.
                </div>
            </div>
        )
    }

    get delay(){
        return(
            <div className="OpenedProject__Body">
                <div className="OpenedProject__Text">
                    Delay is an desktop app made with Electron, React & Redux, with a NodeJS backend coupled with
                    computation in Python. The aim of this app is to simulate en environment in which sounds would be
                    emitted from sources and received by microphones. From the sources' sounds, the app will generate
                    the signals the microphones would receive.
                    <br/>
                    <br/>
                    The received signals from the microphones can then be used in a dataset. This dataset can be used
                    for several tasks, this app was created in order to help create a dataset for a Blind Source Separation
                    algorithm using Deep Neural Networks.
                    <br/>
                    <br/>
                    Feel free to check my <a href="http://github.com/LysandreJik/SourceAdditionDelay">github</a>
                </div>

                <div className="OpenedProject__Text">
                    The user has several actions available in order to build his 2-D environment. Firstly, he or she can
                    dispose the microphones and the selected sources on a canvas, where the distances will be highlighted.
                </div>
                <img src={Placing} className="OpenedProject__Signal" />
                <div className="OpenedProject__Text">
                    The signals are stored in a "signal bank", which holds the signals and their information. Three basic
                    signals are available to the user: sine wave, square wave and sawtooth wave. However, the user can
                    add his or her own signals to the bank, so that they can be used in the simulation later.
                </div>
                <img src={FetchSignal} className="OpenedProject__Signal" />
                <div className="OpenedProject__Text">
                    The fetched signals can then be added to the environment, deleted and moved around like previously
                    shown with the template signals. The user can then generate the sounds as they would be perceived by
                    the microphones. An option is to generate 10 situations in which the microphones and sources would
                    move around the environment.
                </div>
                <div className="OpenedProject__SignalGrid">
                    <img src={PlacingOwn}/>
                    <img src={Generating}/>
                </div>
                <div className="OpenedProject__Text">
                    This app currently generates delays according to a temperature of 15°C in dry air, with a speed of
                    sound of 340 m/s. The sound attenuation due to air is currently a linear function of the distance
                    between the source and microphone, but will soon be replaced by a more advanced model based on
                    a Room Impulse Response Generator (<a href="https://www.mathworks.com/matlabcentral/fileexchange/5116-room-impulse-response-generator">MathWorks</a>,
                    <a href="https://www.researchgate.net/publication/259991276_Room_Impulse_Response_Generator"> RIRG - Emanuël A. P. Habets</a>,
                    <a href="https://github.com/Marvin182/rir-generator"> Python implementation</a>)
                </div>
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
                    <br/>
                    Feel free to check out our <a href="http://github.com/ProjectBlackFalcon">github</a>
                </div>
                <img src={Dofus} className="OpenedProject__Image"/>


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

                <img src={Combat} className="OpenedProject__Image"/>


                <div className="OpenedProject__Text">
                    Our goal was to learn as much as possible, while improving our personal knowledge. We therefore
                    chose to design this AI using different programming technologies : Python, Java, PHP, React, React Native & NodeJS.
                </div>

                <div className="OpenedProject__Text">
                    During this project, my work focused on the advanced fighting mechanics (in Java) and the data
                    visualization (using Web Technologies). A few images of the React Native app are available below.
                </div>
                <div className="OpenedProject__ImagesGrid">
                    <img src={MainMenu}/>
                    <img src={BotSpecs}/>
                    <img src={BotSpecs2}/>
                    <img src={BotGraphs}/>
                    <img src={BotSchedule}/>
                    <img src={BotMap}/>
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
