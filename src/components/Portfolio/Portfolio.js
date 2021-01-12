import appStyles from "../../App.module.css";
import Project from "./components/Project";
import cryptoReference from "../../images/crypto-reference.png"
import seniorCapstone from "../../images/senior-capstone.png"
import roadTripApp from "../../images/road-trip-app.png"
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";

const Portfolio = () => {
    return (
        <div className={ appStyles.contentBlock } style={{ overflow: 'wrap' }}>
            <h2>Portfolio</h2>
            <h4 style={{ marginBottom: '5%' }}>Please use the link to my Github profile in the 'About' section for a full list of projects.</h4>
            <Project 
                title="CryptoReference"
                demoLink="https://crypto-reference.herokuapp.com/"
                sourceLink="https://github.com/asandridge/crypto-reference"
                description={<>
                    A single-page web application whose purpose is to help visualize statistics from the crypto currency market.
                    It leverages React.js for the user interface and a simple Express server for the back end, as well as the 
                    <LinkWithIcon url="https://nomics.com/" content=" Nomics API"/> for retrieving currency data.
                </>}
                imageSource={ cryptoReference }
            />
            <br />
            <Project 
                title="Senior Capstone Project"
                demoLink="https://www.youtube.com/watch?v=qjJxNMXExb0"
                sourceLink="https://github.com/asandridge/psych-capstone"
                description="A mobile application developed by my team for the senior capstone class of 2020. Sponsored by the CU Boulder
                Psychology Department, who intends to use the app to study Cross-Racial Recognition Deficit, a phenomenon where
                an individual does not distinguish faces of other races as easily as their own race. Developed with Angular/Ionic
                for the front end and PHP/MySQL for the back end."
                imageSource={ seniorCapstone }
            />
            <br />
            <Project 
                title="Big Data Architecture Project"
                demoLink="https://www.youtube.com/watch?v=zants1OzQ6I"
                sourceLink="https://github.com/asandridge/road-trip-app"
                description="A single-page web application designed to help users plan custom road trips using the Google Maps API. Uses a
                variety of technologies including Angular, Express.js, MongoDB, Kubernetes, and Docker. Built as a team project
                for the Big Data Architecture class at CU Boulder."
                imageSource={ roadTripApp }
            />
        </div>
    )
}

export default Portfolio;
