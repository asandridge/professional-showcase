import appStyles from "../../App.module.css";
import LinkIcon from "../LinkIcon/LinkIcon";

const Experience = () => {
    return (
        <div className={appStyles.contentBlock} style={{ justifyContent: 'space-around' }}>
            <div>
                <h3>Software Automation Engineer I</h3>
                <h4>
                    <a href="https://en.wikipedia.org/wiki/SpotX" target="_blank" rel="noopener noreferrer">
                        SpotX
                        <LinkIcon />
                    </a>
                    , Jul. 2020 - Present
                </h4>
            </div>
            <div>
                <h3>QA Automation Engineering Internship</h3>
                <h4>
                    <a href="https://en.wikipedia.org/wiki/SpotX" target="_blank" rel="noopener noreferrer">
                        SpotX
                        <LinkIcon />
                    </a>
                , Mar. 2019 - Jun. 2020</h4>
            </div>
            <div>
                <h3>Junior Systems Engineer</h3>
                <h4>
                    <a href="https://en.wikipedia.org/wiki/Charter_Communications" target="_blank" rel="noopener noreferrer">
                        Charter Communications, Inc.
                        <LinkIcon />
                    </a>
                    , Sep. 2018 - Feb. 2019
                </h4>
            </div>
            <div>
                <h3>Atlassian Tools Administrator Intership</h3>
                <h4>
                    <a href="https://en.wikipedia.org/wiki/Charter_Communications" target="_blank" rel="noopener noreferrer">
                        Charter Communications, Inc.
                        <LinkIcon />
                    </a>
                    , May 2018 - Aug. 2018
                </h4>
            </div>
        </div>
    )
}

export default Experience;
