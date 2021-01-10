import appStyles from "../../App.module.css";
import { Fab } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import PDF from "../../documents/resume.pdf"

const About = () => {
    return (
        <div className={ appStyles.contentBlock }>

            <h1>Alex <span className={appStyles.textColored}>Sandridge</span></h1>
            <h4>1052 Sleepy Hollow Road, Golden CO, 80401 - 303-330-1197 - alex.sandridge@gmail.com</h4>

            <p className={ appStyles.marginTop }>
                I am a software developer specializing in front end development and testing.
                <br />
                I have a particular interest in blockchain technology and aspire to make it my career focus.
                <br />
                This is my personal professional website to showcase my accomplishments in software and provide
                more information about myself than could be found on a one page resume.
            </p>

            <div className={ appStyles.flexRowAligned } style={{ width: '100%', marginTop: '5vmin' }}>
                <Fab color="primary" href="https://github.com/asandridge" style={{ marginRight: '5%' }} target="_blank" rel="noopener noreferrer"><GitHubIcon /></Fab>
                <Fab color="primary" href="https://www.linkedin.com/in/alexander-sandridge-7117a9175/" style={{ marginRight: '5%' }} target="_blank" rel="noopener noreferrer"><LinkedInIcon /></Fab>
                <Fab color="primary" href="https://www.facebook.com/alex.sandridge/" style={{ marginRight: '5%' }} target="_blank" rel="noopener noreferrer"><FacebookIcon /></Fab>
                <Router>
                    <NavLink to={ PDF } target='_blank' style={{ marginRight: '5%' }} rel="noopener noreferrer">
                        <Fab color="primary" target="_blank" rel="noopener noreferrer"><PictureAsPdfIcon /></Fab>
                    </NavLink>
                </Router>
            </div>
        </div>
    )
}

export default About;
