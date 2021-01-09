import appStyles from "../../App.module.css";
import cryptoReference from "../../images/crypto-reference.png"
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";

const Portfolio = () => {
    return (
        <div className={ appStyles.contentBlock } style={{ overflow: 'wrap' }}>
            <h2>Portfolio</h2>
            <h4 style={{ marginBottom: '5%' }}>Please use the link to my Github profile in the 'About' section for a full list of projects.</h4>
            <div>
                <h3>CryptoReference</h3>
                <div style={{ marginLeft: '5px' }}>
                    <LinkWithIcon url="https://crypto-reference.herokuapp.com/" content="Live Demo" />
                    <LinkWithIcon url="https://github.com/asandridge/crypto-reference" content="Source Code" />
                </div>
                <p>
                    A single-page web application whose purpose is to help visualize statistics from the crypto currency market.
                    It leverages React.js for the user interface and a simple Express server for the back end, as well as the 
                    <LinkWithIcon url="https://nomics.com/" content="Nomics API"/> for retrieving currency data.
                </p>
                <br />
                <img src={cryptoReference} alt="crypto-reference" style={{ height: '40vmin', borderRadius: '3%' }} />
            </div>
        </div>
    )
}

export default Portfolio;
