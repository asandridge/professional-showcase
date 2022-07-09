import appStyles from "../../App.module.css";

const Skills = () => {
    return (
        <div className={ appStyles.contentBlock }>

            <h2 className={ appStyles.contentElement }>Skills</h2>

            <div className={ appStyles.contentElement }>
                <h3>Programming Languages:</h3>
                <h4>Javascript, Typescript, Python, HTML/CSS, C++, PHP</h4>
            </div>

            <div className={ appStyles.contentElement }>
                <h3>Databases:</h3>
                <h4>MySQL, PostgreSQL, MongoDB</h4>
            </div>

            <div className={ appStyles.contentElement }>
                <h3>Application Frameworks:</h3>
                <h4>React Native, React.js, Angular.js, Express.js, Ionic</h4>
            </div>

            <div className={ appStyles.contentElement }>
                <h3>CMSs:</h3>
                <h4>WordPress, ExpressionEngine</h4>
            </div>

            <div className={ appStyles.contentElement }>
                <h3>Other tools and technologies:</h3>
                <h4>Docker, Jenkins, Selenium Webdriver, Blockchain (Ethereum/Solidity)</h4>
            </div>

        </div>
    )
}

export default Skills;
