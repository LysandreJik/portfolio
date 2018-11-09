import React, {Component} from 'react';
import logo from './logo.svg';
import './theme/Main.css';
import Banner from "./Banner";
import Interests from "./Interests";
import SchoolProjects from "./SchoolProjects";
import WorkExperience from "./WorkExperience";
import PersonalProjects from "./PersonalProjects";

class App extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Interests/>
                <PersonalProjects/>
                <WorkExperience/>
                <SchoolProjects/>
            </div>
        );
    }
}

export default App;
