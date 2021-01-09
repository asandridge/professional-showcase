import appStyles from "../../App.module.css";
import cryptoReference from "../../images/crypto-reference.png"
import LinkIcon from "../LinkIcon/LinkIcon";

const Portfolio = () => {
    return (
        <div className={appStyles.contentBlock}>
            <h4>Please use the link to my Github profile in the 'About' section for a full list of projects.</h4>
            <br />
            <br />
            <div>
                <h2>CryptoReference</h2>
                <br />
                <a href="https://crypto-reference.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo<LinkIcon /></a>
                <br />
                <a href="https://github.com/asandridge/crypto-reference" target="_blank" rel="noopener noreferrer">Source Code<LinkIcon /></a>
                <br />
                <br />
                <p>A single-page web application whose purpose is to help visualize statistics from the crypto currency market. It leverages React.js for the user interface and a simple Express server for the back end, as well as the <a href="https://nomics.com/">Nomics API</a> for retrieving currency data.</p>
                <br />
                <img src={cryptoReference} alt="crypto-reference" style={{ height: '300px', borderRadius: '3%' }} />
            </div>
        </div>
    )
}

export default Portfolio;
