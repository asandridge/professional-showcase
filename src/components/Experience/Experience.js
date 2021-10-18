import appStyles from "../../App.module.css";
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";

const Experience = () => {
    return (
        <div className={ appStyles.contentBlock }>

            <h2 className={ appStyles.contentElement }>Experience</h2>

            <div className={ appStyles.contentElement }>
                <div className={ appStyles.headerAndDate }>
                    <h3>Software Automation Engineer</h3>
                    <h4>Jul. 2020 - Present</h4>
                </div>
                <h4>
                    <LinkWithIcon url="https://www.spotx.tv/" content="SpotX"/>
                    , Denver CO
                </h4>
            </div>

            <div className={ appStyles.contentElement }>
                <div className={ appStyles.headerAndDate }>
                    <h3>QA Automation Engineering Internship</h3>
                    <h4>Mar. 2019 - Jun. 2020</h4>
                </div>
                <h4>
                    <LinkWithIcon url="https://www.spotx.tv/" content="SpotX"/>
                    , Denver CO
                </h4>
            </div>

            <div className={ appStyles.contentElement }>
                <div className={ appStyles.headerAndDate }>
                    <h3>Junior Systems Engineer</h3>
                    <h4>Sep. 2018 - Feb. 2019</h4>
                </div>
                <h4>
                    <LinkWithIcon url="https://www.spectrum.com/" content="Charter Communications, Inc."/>
                    , Denver CO
                </h4>
            </div>

            <div className={ appStyles.contentElement }>
                <div className={ appStyles.headerAndDate }>
                    <h3>Software Engineering Internship</h3>
                    <h4>May 2018 - Aug. 2018</h4>
                </div>
                <h4>
                    <LinkWithIcon url="https://www.spectrum.com/" content="Charter Communications, Inc."/>
                    , Denver CO
                </h4>
            </div>

        </div>
    )
}

export default Experience;
