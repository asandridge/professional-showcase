import { Link, Element } from 'react-scroll'
import styles from './App.module.css';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import myPortrait from './images/me.png';

const App = () => {

    return (
        <div className={ styles.flexContainer }>

            <div className={ styles.sideBar }>
                <div className={ styles.flexRowAligned } style={{ flexDirection: "column" }}>
                    <Link to="About" spy={true} smooth={true} duration={250} containerId="containerElement" >
                        <img src={ myPortrait } alt="Me" style={{ borderRadius: "50%", height: "18vmin", width: "18vmin", marginBottom: "5%", border: "5px solid", cursor: "pointer" }}/>
                    </Link>
                    <Link activeClass={styles.activeLink} to="About" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink}>About</Link>
                    <Link activeClass={styles.activeLink} to="Education" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink}>Education</Link>
                    <Link activeClass={styles.activeLink} to="Experience" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink}>Experience</Link>
                    <Link activeClass={styles.activeLink} to="Portfolio" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink}>Portfolio</Link>
                    <Link activeClass={styles.activeLink} to="Skills" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink}>Skills</Link>
                    <Link activeClass={styles.activeLink} to="Interests" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink}>Interests</Link>
                </div>
            </div>

            <Element className="element" id="containerElement" style={{ width: "80%", height: "100%", overflow: 'scroll', paddingLeft: '5%' }}>
                <Element name="About" style={{ marginBottom: '15%', height: '100%' }}><About /></Element>
                <hr />
                <Element name="Education" style={{ marginTop: '15%', height: '100%', marginBottom: '15%' }}><Education /></Element>
                <hr />
                <Element name="Experience" style={{ marginTop: '15%', height: '100%', marginBottom: '15%' }}><Experience /></Element>
                <hr />
                <Element name="Portfolio" style={{ marginTop: '15%', height: '100%', marginBottom: '15%' }}><Portfolio /></Element>
                <hr />
                <Element name="Skills" style={{ marginTop: '15%', height: '100%', marginBottom: '15%' }}><Skills /></Element>
                <hr />
                <Element name="Interests" style={{ marginTop: '15%', height: '100%', marginBottom: '15%' }}><Interests /></Element>
            </Element>
         </div>
    )
}

export default App;
