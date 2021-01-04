import { Link, Element } from 'react-scroll'
import styles from './App.module.css';
import About from './components/About/About';
import Awards from './components/Awards/Awards';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import myPortrait from './images/me.png';

const App = () => {
    
    const getScrollPosition = () => {

    }

    return (
        <div className={styles.flexContainer}>

            <div className={styles.sideBar}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img src={myPortrait} alt="Me"/>
                    <Link activeClass={styles.activeLink} to="About" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink} >About</Link>
                    <Link activeClass={styles.activeLink} to="Education" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink} >Education</Link>
                    <Link activeClass={styles.activeLink} to="Experience" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink} >Experience</Link>
                    <Link activeClass={styles.activeLink} to="Portfolio" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink} >Portfolio</Link>
                    <Link activeClass={styles.activeLink} to="Skills" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink} >Skills</Link>
                    <Link activeClass={styles.activeLink} to="Interests" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink} >Interests</Link>
                    <Link activeClass={styles.activeLink} to="Awards" spy={true} smooth={true} duration={250} containerId="containerElement" className={styles.sideBarLink} >Awards</Link>
                </div>
            </div>

            <Element className="element" id="containerElement" style={{ width: "80%", height: "100%", overflow: 'scroll', paddingLeft: '5%' }}>
                <Element name="About" style={{ height: '100%' }}><About /></Element>
                <Element name="Education" style={{ marginTop: '50%', height: '100%' }}><Education /></Element>
                <Element name="Experience" style={{ marginTop: '50%', height: '100%' }}><Experience /></Element>
                <Element name="Portfolio" style={{ marginTop: '50%', height: '100%' }}><Portfolio /></Element>
                <Element name="Skills" style={{ marginTop: '50%', height: '100%' }}><Skills /></Element>
                <Element name="Interests" style={{ marginTop: '50%', height: '100%' }}><Interests /></Element>
                <Element name="Awards" style={{ marginTop: '50%', height: '100%' }}><Awards /></Element>
            </Element>
         </div>
    )
}

export default App;
