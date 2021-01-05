import appStyles from "../../App.module.css";

const Skills = () => {
    return (
        <div className={appStyles.contentBlock}>
           <h2>Programming Languages:</h2> 
           <h4>Javascript, Typescript, Python, HTML/CSS, C++</h4>
           <h2>Databases:</h2> 
           <h4>MySQL, NoSQl</h4>
           <h2>Frameworks:</h2>
           <h4>React.js, Angular.js, Express.js</h4>
           <h2>Other tools and technologies:</h2>
           <h4>Blockchain (Ethereum), Docker, Jenkins</h4>
        </div>
    )
}

export default Skills;
