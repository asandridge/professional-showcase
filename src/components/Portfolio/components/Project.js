import LinkWithIcon from "../../LinkWithIcon/LinkWithIcon";

const Project = (props) => {
    return (
        <div>
            <h3>{ props.title }</h3>
            <div style={{ marginLeft: '5px' }}>
                <LinkWithIcon url={ props.demoLink } content=" Demo" />
                <LinkWithIcon url={ props.sourceLink } content=" Source Code" />
            </div>
            <p>{ props.description }</p>
            <br />
            <img src={props.imageSource} alt="project-sample" style={{ height: '40vmin', borderRadius: '3%' }} />
        </div>
    )
}

export default Project;
