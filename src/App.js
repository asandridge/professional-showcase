import styles from './App.module.css';
import About from './components/About/About';
import Awards from './components/Awards/Awards';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import Portfolio from './components/Portfolio/Portfolio';
import SideBar from './components/SideBar/SideBar';
import Skills from './components/Skills/Skills';

const App = () => {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.sideBar}>
                <SideBar /> 
            </div>
            <div className={styles.contentContainer}>
                <About />
                <Experience />
                <Education />
                <Skills />
                <Portfolio />
                <Interests />
                <Awards />
            </div>
        </div>
    )
}

export default App;
