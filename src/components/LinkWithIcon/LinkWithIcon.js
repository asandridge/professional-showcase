import tabIcon from "../../images/new-tab.png";

const LinkWithIcon = ({ url, content }) => {
    return (
        <a href={ url } target="_blank" rel="noopener noreferrer">
            { content } <img src={tabIcon} style={{height: '2.5vmin', paddingBottom: '1vmin'}} alt="New Tab"/>
        </a>
    )
}

export default LinkWithIcon