import React, {Component} from 'react';
import './theme/Main.css';
import Banner from "./Banner";
import Interests from "./Interests";
import SchoolProjects from "./SchoolProjects";
import WorkExperience from "./WorkExperience";
import PersonalProjects from "./PersonalProjects";
import Contact from "./Contact";

class App extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Interests/>
                <PersonalProjects/>
                <WorkExperience/>
                <SchoolProjects/>
                <Contact/>
            </div>
        );
    }
}

export default App;
