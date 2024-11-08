import './footer.css'
import Image from 'next/image';
import zlogo from '../public/assets/public/logo.png';
import { FaFacebook, FaTwitter, FaGooglePlusG, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="container">
                {/* Left Side: Logo and About Section */}
                <div className="footer-left">
                    <Image
                        src={zlogo}
                        alt="Description of image"
                        width={100}
                        height={100} 
                    />
                    <p>I am a web developer with 1 years of experience in creating modern responsive, and user-focused websites. Skilled in leveraging the latest technologies to deliver seamless and efficient web experiences I am dedicated to building high-quality functional, and visually appealing applications that meet user needs and enhance online presence.</p>
                    <p>© Zartash Imran 2024</p>
                </div>

                {/* Center Section: Services and Links */}
                <div className="footer-center">
                    <div className="footer-column">
                        <h4>SERVICES</h4>
                        <ul>
                            <li><a href="#">Figma design</a></li>
                            <li><a href="#">Web Developer</a></li>
                            <li><a href="#">UI/UX Designer</a></li>
                            <li><a href="#">Graphic Designer</a></li>
                            <li><a href="#">Branding</a></li>
                            <li><a href="#">Marketing</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>USEFUL LINKS</h4>
                        <ul>
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Lorem.</a></li>
                            <li><a href="#">Lorem Ipsum Dolor</a></li>
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Lorem.</a></li>
                            <li><a href="#">Lorem Ipsum Dolor</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Contact Info and Social Links */}
                <div className="footer-right">
                    <h4>CONTACTS</h4>
                    <ul>
                        <li><FaPhoneAlt /> ++92(300) 000-0000</li>
                        <li><FaPhoneAlt /> +92(300) 000-0000</li>
                        <li><FaEnvelope /> zartashimran12345@gmail.com</li>
                    </ul>

                    <h4>FOLLOW US</h4>
                    <div className="fsocial-icons">
                        <a href="https://www.facebook.com"><FaFacebook /></a>
                        <a href="https://twitter.com/login"><FaTwitter /></a>
                        <a href="https://www.google.com"><FaGooglePlusG /></a>
                        <a href="http://www.linkedin.com"><FaLinkedin /></a>
                        <a href="http://www.youtube.com"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;