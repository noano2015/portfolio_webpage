import './Nav.css'
import githubLogo from '../assets/images/github.png';
import linkedinLogo from '../assets/images/linkedin.png';

const WebNav = function(){
    

    return(
        <div className="WebNav">
            <ul>
                <li key="github">
                    <img src={githubLogo} alt="github" width={50} height={50} />
                    <a href="https://www.github.com">Github</a>
                </li>
                <li key="linkedin">
                    <img src={linkedinLogo} alt="linkedin" width={50} height={50} />
                    <a href="https://www.linkedin.com/">Linkedin</a>
                </li>
            </ul>
        </div>
    )
}

export default WebNav;