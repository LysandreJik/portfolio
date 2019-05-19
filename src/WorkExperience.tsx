import React from "react";
import "./theme/WorkExperience.css";

import Molcure from "./icons/molcure.png";
import Mashroom from "./icons/mashroom.png";
import Barden from "./icons/barden.png";

export default class WorkExperience extends React.Component {
	render() {
		return (
			<div className="Category">
				<h1>Work experience</h1>
				<div className="WorkExperience__Text">
					Throughout my short career, I have mostly worked in front-end development. I now wish to continue in Artificial Intelligence
					(Machine Learning & Data Science being two very interesting fields as well), with a focus on Reinforcement Learning if possible.
				</div>

				<div className="WorkExperience__Grid">
					<Experience
						company={"Barden Linguistics"}
						field={"Real life language exchange - New York City (USA) based"}
						icon={Barden}
						totalDuration={new Date(new Date().getTime() - new Date("August 1, 2018").getTime()).getMonth() + " months"}>
						<SubExperience
							title={"Fullstack Javascript developer"}
							from={"August 2018"}
							to={"now !"}
							description={
								"Freelance work as a React, Redux and NodeJS web developer for Barden Linguistics. Used Google Firebase for authentication, database and storage."
							}
						/>
					</Experience>

					<Experience
						company={"Mashroom"}
						field={"Universal authentication technology - Tokyo (Japan) based"}
						icon={Mashroom}
						totalDuration={"4 months"}>
						<SubExperience
							title={"Freelance"}
							from={"April 2018"}
							to={"July 2018"}
							description={
								"Freelance work as a React Native developer using the Expo platform. Developed screens & logic for both Android and iOS."
							}
						/>
					</Experience>

					<Experience
						company={"Molcure"}
						field={"Machine Learning applied to biotechnologies - Tokyo (Japan) based"}
						icon={Molcure}
						totalDuration={"1 year"}>
						<SubExperience
							title={"Freelance"}
							from={"November 2017"}
							to={"July 2018"}
							description={
								"Following my internship at Molcure, I continue my activity in this company by doing projects on demand as a React & Redux developer."
							}
						/>
						<SubExperience
							title={"Intern"}
							from={"August 2017"}
							to={"November 2017"}
							location={"Tokyo, Japan"}
							description={
								"Technical internship during which I worked on a robot to facilitate biology researchers' work. I started by creating PCBs using the EAGLE software, programmed Raspberry PIs and Arduinos to communicate among themselves as well as to control several motors. My main focus during this internship was to create the web interface to control the robot, which was made using JavaScript ES6 and the ReactJS framework. \n" +
								"This internship was done on behalf of the KEIO university where I worked in a research group, which allowed me to discover both the research world (KEIO) as well as the start-up world (MOLCURE)."
							}
						/>
					</Experience>
				</div>
			</div>
		);
	}
}

interface ExperiencePropsTypes {
	icon: string;
	company: string;
	totalDuration: string;
	field: string;
}

interface ExperienceStateTypes {
	update: boolean;
}

class Experience extends React.Component<ExperiencePropsTypes, ExperienceStateTypes> {
	state = {
		update: false
	};

	componentDidMount() {
		window.addEventListener("resize", () => this.setState({ update: !this.state.update }));
	}

	render() {
		return (
			<div className="Experience">
				<div className="Experience__Header">
					<img className="Experience__Icon" src={this.props.icon} />
					<div className="Experience__Info">
						<div className="Experience__Company">{this.props.company}</div>
						<div className="Experience__TotalDuration">{this.props.totalDuration}</div>
					</div>
					{window.innerWidth > 600 ? <div className="Experience__Field">[ {this.props.field} ]</div> : ""}
				</div>
				{/*{window.innerWidth <= 600 ? <div className="Experience__Field">[  {this.props.field}  ]</div> : ""}*/}
				<div style={{ marginLeft: "100px" }}>{this.props.children}</div>
				<hr />
			</div>
		);
	}
}

interface SubExperiencePropsTypes {
	title: string;
	location?: string;
	description: string;
	from: string;
	to: string;
}

class SubExperience extends React.Component<SubExperiencePropsTypes> {
	render() {
		return (
			<div>
				<div className="SubExperience__Title">{this.props.title}</div>
				<div className="SubExperience__Duration">
					{this.props.from} - {this.props.to}
				</div>
				<div className="SubExperience__Location">{this.props.location}</div>
				<div className="SubExperience__Description">{this.props.description}</div>
			</div>
		);
	}
}
