import appStyles from "../../App.module.css";
import LinkIcon from "../LinkIcon/LinkIcon";

const Interests = () => {
    return (
        <div className={appStyles.contentBlock}>
            <h2>Interests</h2>
            <p>
                My primary interests in the software domain are web development and blockchain technologies.
                <br />
                Outside of software, I have many interests including salsa dancing, <a href="https://asandridge.github.io/piping-site" target="_blank" rel="noopener noreferrer">bagpipe playing<LinkIcon /></a>, language learning, and mindfulness.
                <br />
                For more information about me, please visit my Facebook profile.
            </p>
        </div>
    )
}

export default Interests;
