import appStyles from "../../App.module.css";
import { Fab } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const About = () => {
    return (
        <div className={appStyles.contentBlock}>

            <h1>Alex Sandridge</h1>
            <div>1052 Sleepy Hollow Road, Golden Colorado, 80401</div>
            <div>303-330-1197</div>
            <div>alex.sandridge@gmail.com</div>

            <div style={{marginTop: '5%'}}>I am a software developer specializing in front end development and testing.</div>
            <div>I have a particular interest in blockchain technology and aspire to make it my career focus.</div>

            <div style={{display: 'flex', width: '100%', marginTop: '5%'}}>
                <Fab color="primary" href="https://github.com/asandridge" style={{marginRight: '5%'}}><GitHubIcon /></Fab>
                <Fab color="primary" href="https://www.linkedin.com/in/alexander-sandridge-7117a9175/" style={{marginRight: '5%'}}><LinkedInIcon /></Fab>
                <Fab color="primary" href="https://www.facebook.com/alex.sandridge/" style={{marginRight: '5%'}}><FacebookIcon /></Fab>
            </div>
        </div>
    )
}

export default About;
