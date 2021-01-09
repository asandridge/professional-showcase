import appStyles from "../../App.module.css";
import LinkIcon from "../LinkIcon/LinkIcon";

const Interests = () => {
    return (
        <div className={appStyles.contentBlock}>
            <h2>Interests</h2>
            <p>
                My primary interests in the software domain are web development and blockchain technologies.
                <br />
                Outside of software, I have many interests including salsa dancing, <a href="https://asandridge.github.io/piping-site" target="_blank" rel="noopener noreferrer">bagpipe playing<LinkIcon /></a>, language learning, home brewing, martial arts, and mindfulness.
                <br />
                <br />
                I am a very active salsa dancer. I began dancing in college, and haven't stopped (except during quarantine). I have taught the salsa classes at CU Boulder dozens of times and was also the primary salsa instructor for RNA Dance in Broomfield, CO for almost a year.
                <br />
                I was once also a very active bagpipe player. I have competed around the country and won numerous awards for my performances. I have played with the Queen City Pipe Band of Denver, CO as well as the Colorado Youth Pipe Band when I was in high school. I still perform locally for weddings, funerals, and other social events (see the link above).
                <br />
                <br />
                I don't partake in very much social media, but to learn more about me, the link to my Facebook account can be found in the 'About' section.
            </p>
        </div>
    )
}

export default Interests;
