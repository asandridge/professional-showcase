import styles from './SideBar.module.css';
import myPortrait from '../../images/me.png';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className={styles.container}>
            <img src={myPortrait} alt="Me"/>
            <div className={styles.sideBarItem}>About</div>
            <div className={styles.sideBarItem}>Education</div>
            <div className={styles.sideBarItem}>Experience</div>
            <div className={styles.sideBarItem}>Portfolio</div>
            <div className={styles.sideBarItem}>Skills</div>
            <div className={styles.sideBarItem}>Interests</div>
            <div className={styles.sideBarItem}>Awards</div>
            <Link to='/home/#section1'>Awards</Link>
        </div>
    )
}

export default SideBar;
