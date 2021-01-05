import appStyles from "../../App.module.css";

const Education = () => {
    return (
        <div className={appStyles.contentBlock} style={{justifyContent: 'center'}}>
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>University of Colorado Boulder</h2>
                    <h4>Aug. 2016 - May 2020</h4>
                </div>
                <h4>Bachelor of Science</h4>
                <h4>Computer Science - GPA: 3.38</h4>
            </div>
            <br />
            <br />
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>Arvada West High School</h2>
                    <h4>Aug. 2012 - May 2016</h4>
                </div>
                <h4>GPA: 4.0</h4>
            </div>
       </div>
    )
}

export default Education;
