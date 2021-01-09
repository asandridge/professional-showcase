import appStyles from "../../App.module.css";

const Education = () => {
    return (
        <div className={appStyles.contentBlock}>
            <h2>Education</h2>
            <div style={{height: '10vh'}}></div>
            <div style={{width: "100%"}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3 style={{fontSize: '5vh'}}>University of Colorado Boulder</h3>
                    <h4 style={{marginRight: "5%"}}>Aug. 2016 - May 2020</h4>
                </div>
                <h4>Bachelor of Science in Computer Science</h4>
                <p>GPA: 3.38</p>
            </div>
            <div style={{width: "100%"}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3 style={{fontSize: '5vh'}}>Arvada West High School</h3>
                    <h4 style={{marginRight: "5%"}}>Aug. 2012 - May 2016</h4>
                </div>
                <p>GPA: 4.0</p>
            </div>
       </div>
    )
}

export default Education;
