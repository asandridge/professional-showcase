import appStyles from "../../App.module.css";

const Skills = () => {
    return (
        <div className={ appStyles.contentBlock } style={{ justifyContent: 'space-around' }}>

            <h2>Skills</h2>

            <div>
                <h3>Programming Languages:</h3> 
                <h4>Javascript, Typescript, Python, HTML/CSS, C++</h4>
            </div>

            <div>
                <h3>Databases:</h3> 
                <h4>Relational (MySQL), NoSQl</h4>
            </div>

            <div>
                <h3>Frameworks:</h3>
                <h4>React.js, Angular.js, Express.js</h4>
            </div>

            <div>
                <h3>Other tools and technologies:</h3>
                <h4>Blockchain (Ethereum/Solidity), Docker, Jenkins, Selenium Webdriver</h4>
            </div>

        </div>
    )
}

export default Skills;
