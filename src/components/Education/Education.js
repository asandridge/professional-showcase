import appStyles from "../../App.module.css";
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";
import PDF from "../../documents/diploma.pdf"
import { NavLink, BrowserRouter as Router } from 'react-router-dom'

const Education = () => {
    return (
        <div className={ appStyles.contentBlock }>
            <h2 style={{ marginBottom: '10vmin' }}>Education</h2>

            <div className={ appStyles.contentElement }>
                <div className={ appStyles.headerAndDate }>
                    <h3 style={{ fontSize: '5vmin' }}>University of Colorado Boulder</h3>
                    <h4>Aug. 2016 - May 2020</h4>
                </div>
                <Router>
                    <NavLink to={ PDF } target='_blank' rel="noopener noreferrer">
                        <h4>Bachelor of Science in Computer Science<LinkWithIcon /></h4>
                    </NavLink>
                </Router>
                <p>GPA: 3.38</p>
            </div>

            <div className={ appStyles.contentElement }>
                <div className={ appStyles.headerAndDate }>
                    <h3 style={{ fontSize: '5vmin' }}>Arvada West High School</h3>
                    <h4>Aug. 2012 - May 2016</h4>
                </div>
                <p>GPA: 4.0</p>
            </div>

       </div>
    )
}

export default Education;
