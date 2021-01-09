import appStyles from "../../App.module.css";
import LinkIcon from "../LinkIcon/LinkIcon";

const Experience = () => {
    return (
        <div className={appStyles.contentBlock} style={{ justifyContent: 'space-around' }}>
            <h2>Experience</h2>
            <div style={{width: '100%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3>Software Automation Engineer I</h3>
                    <h4 style={{marginRight: "5%"}}>Jul. 2020 - Present</h4>
                </div>
                <h4><a href="https://www.spotx.tv/" target="_blank" rel="noopener noreferrer">
                    SpotX
                    <LinkIcon />
                    , Denver CO
                </a></h4>
            </div>
            <div style={{width: '100%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3>QA Automation Engineering Internship</h3>
                    <h4 style={{marginRight: "5%"}}>Mar. 2019 - Jun. 2020</h4>
                </div>
                <h4><a href="https://www.spotx.tv/" target="_blank" rel="noopener noreferrer">
                    SpotX
                    <LinkIcon />
                    , Denver CO
                </a></h4>
            </div>
            <div style={{width: '100%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3>Junior Systems Engineer</h3>
                    <h4 style={{marginRight: "5%"}}>Sep. 2018 - Feb. 2019</h4>
                </div>
                <h4><a href="https://spectrum.com" target="_blank" rel="noopener noreferrer">
                    Charter Communications, Inc.
                    <LinkIcon />
                    , Denver CO
                </a></h4>
            </div>
            <div style={{width: '100%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3>Atlassian Tools Administrator Intership</h3>
                    <h4 style={{marginRight: "5%"}}>May 2018 - Aug. 2018</h4>
                </div>
                <h4><a href="https://spectrum.com" target="_blank" rel="noopener noreferrer">
                    Charter Communications, Inc.
                    <LinkIcon />
                    , Denver CO
                </a></h4>
            </div>
        </div>
    )
}

export default Experience;
