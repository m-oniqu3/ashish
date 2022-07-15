import { FaTwitter, FaRedditAlien, FaCodepen, FaLinkedin} from "react-icons/fa"
export default function Footer(){
    
    return(
        <footer className="footer">
    
            <div classNameName="footer-info">
                <a href="mailto:ashishsunny.dev@gmail.com" className="footer__link"><img src="../images/pixel_art_me.png" className="pixel-art" alt="pixel_art"/></a>
            </div>
            
            <ul className="social-list">
                <li className="social-list__item"><a className="social-list__link" href="https://codepen.io">
                <i className="fa-brands fa-twitter"><FaTwitter /></i>
                
                 
                </a></li>

                <li className="social-list__item"><a className="social-list__link" href="http://dribbble.com">
                    <i className="fa-brands fa-reddit-alien"><FaRedditAlien /></i>
                </a></li>

                <li className="social-list__item"><a className="social-list__link" href="https://twitter.com">
                    <i className="fa-brands fa-codepen"><FaCodepen /></i>
                </a></li>

                <li className="social-list__item"><a className="social-list__link" href="https://github.com">
                    <i className="fa-brands fa-linkedin-in"><FaLinkedin /></i>
                </a></li>
            </ul>
        </footer>
    )
}