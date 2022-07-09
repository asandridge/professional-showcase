import appStyles from "../../App.module.css";
import { Fab } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const About = () => {
    return (
        <div className={ appStyles.contentBlock }>

            <h1>Alex <span className={appStyles.textColored}>Sandridge</span></h1>
            <h4>1052 Sleepy Hollow Road, Golden CO, 80401 - 303-330-1197 - alexsandridge@tutanota.com</h4>

            <p className={ appStyles.marginTop }>
                I am a software developer specializing in website and mobile app development, with experience in CI/CD solutions and automated testing.
            </p>

            <div className={ appStyles.flexRowAligned } style={{ width: '100%', marginTop: '5vmin' }}>
                <Fab color="primary" href="https://github.com/asandridge" style={{ marginRight: '5%' }} target="_blank" rel="noopener noreferrer"><GitHubIcon /></Fab>
                <Fab color="primary" href="https://www.linkedin.com/in/asandridge/" style={{ marginRight: '5%' }} target="_blank" rel="noopener noreferrer"><LinkedInIcon /></Fab>
                <Fab color="primary" href="https://www.facebook.com/alex.sandridge/" style={{ marginRight: '5%' }} target="_blank" rel="noopener noreferrer"><FacebookIcon /></Fab>
                <Fab color="primary" href="https://github.com/asandridge/resume/blob/master/resume.pdf" style={{ marginRight: '5%' }} target="_blank" rel="noopener noreferrer"><PictureAsPdfIcon /></Fab>
            </div>
        </div>
    )
}

export default About;
