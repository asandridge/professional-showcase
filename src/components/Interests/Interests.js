import appStyles from "../../App.module.css";
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";

const Interests = () => {
    return (
        <div className={ appStyles.contentBlock }>
            <h2>Interests</h2>
            <p>My primary interests in the software domain are web development and blockchain technologies.</p>
            <p>
                Outside of software, I have many interests including salsa dancing,
                <LinkWithIcon url="https://asandridge.github.io/piping-site/" content=" bagpipe playing"/>, 
                journaling, language learning, and home brewing.
            </p>
            <p>
                I have a great passion for salsa dancing. Although it has mostly come to a halt during the current pandemic, 
	        I still love to dance when I get the chance.
                I have taught the salsa classes at CU Boulder (Ritmos Latinos) many times and was also the primary salsa 
                instructor for RNA Dance in Broomfield, CO for almost a year.
            </p>
            <p>
                I also have a great passion for playing the bagpipes. As a formerly competitive piper, I would often travel 
	        around the country to compete in highland games. I have played with the Queen City Pipe Band of Denver, CO 
	        as well as the Colorado Youth Pipe Band when I was young. While I am no longer competitive, I still perform 
	        locally for weddings, funerals, and other social events (see the link above).
            </p>
	    <p>
		Lastly, but most importantly, I am a convert to Roman Catholicism. Although I have not been fully initiated
	    	into the Church, I am in the process to be formally received next year. It has been a great journey for me, with many ups
	    	and downs, and surely many more to come, but I can say with confidence that Christ and the Church are the 
	    	most important part of my life.
	    </p>
            <p>I'm not very active on social media, but to learn more about me, the link to my Facebook account can be found in the 'About' section.</p>
        </div>
    )
}

export default Interests;
