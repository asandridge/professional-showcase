import LinkWithIcon from "../../LinkWithIcon/LinkWithIcon";

const Project = (props) => {
    return (
        <div>
            <h3>{ props.title }</h3>
            <div style={{ marginLeft: '5px' }}>
                <b><LinkWithIcon url={ props.demoLink } content=" Demo" /></b>
                <b><LinkWithIcon url={ props.sourceLink } content=" Source Code" /></b>
            </div>
            <p>{ props.description }</p>
            <br />
            <img src={props.imageSource} alt="project-sample" style={{ height: '40vmin', borderRadius: '3%' }} />
        </div>
    )
}

export default Project;
