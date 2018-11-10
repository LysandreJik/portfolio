import React from 'react'
import './theme/SchoolProjects.css'
import Compression from "./images/compression.png";
import Tattoo from "./images/image_tattoo.png";
import Initial from "./images/initial_parameters.png";
import Airbus from "./icons/airbus.png";

export default class SchoolProjects extends React.Component{

    render() {
        return (
            <div className="Category">
                <h1>Academic projects</h1>
                <div style={{marginTop: "10vw", display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <img src={Airbus} width={60} height={60} style={{marginRight: "4vw"}}/>
                    <div>
                        <h1>End of studies' project manager at Airbus</h1>
                        Project that is part of our fifth year at ESEO.
                        Leading a team of four people to develop a Blind Source Separation algorithm using Machine Learning and Artificial Intelligence methods.
                    </div>
                </div>
                <hr/>
                <div className="SchoolProjects">
                    <div className="Document" onClick={() => window.location = "http://lysandredebut.fr/compression.pdf"}>
                        <div className="Document__Title"><div>Compression and decompression of a numerical image (FR)</div></div>
                        <img className="Document__Image" src={Compression}/>
                    </div>
                    <div className="Document" onClick={() => window.location = "http://lysandredebut.fr/tattoo.pdf"}>
                        <div className="Document__Title"><div>Image tattoo using the discrete cosine transform (FR)</div></div>
                        <img className="Document__Image" src={Tattoo}/>
                    </div>
                    <div className="Document" onClick={() => window.location = "http://lysandredebut.fr/optimization.pdf"}>
                        <div className="Document__Title"><div>Initial parameters choice optimization for plane wave propagation model fitting (EN)</div></div>
                        <img className="Document__Image" src={Initial}/>
                    </div>

                </div>


            </div>
        );
    }
}
