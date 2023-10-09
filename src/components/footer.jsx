import React from "react";
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer(){
    return(
        <div className="footer" id="footer">
            <div className="footer-main">
                <div className="footer-heading">
                    <h3>ShareFood.com</h3>
                </div>
                <div className="footer-links">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <a href="login" style={{textDecoration:"none"}}><p>Login</p></a>
                    <p>Signup</p>
                    <p>Blog</p>

                </div>
                <div className="footer-images">
                   <img src="./images/linkedin.png" alt="" />
                   <img src="./images/insta.png" alt="" />
                   <img src="./images/twitter.png" alt="" />
                </div>
                
            </div>
        </div>
    )
}
export default Footer;