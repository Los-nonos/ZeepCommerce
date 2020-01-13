import React from 'react';
import InputWithLogo from '../Components/InputWithLogo';
import ButtonRadious from '../Components/ButtonRadious';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        
        this.logo = props.logo;
    }

    render() {
        return (
            <footer>
            <div class="footer-container">
              <div class="left-col">
                {/* <img src={this.logo} alt="" class="logo-footer" /> */}
                <div class="social-media">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <p class="rights-text">© 2020 Created By Me All Rights Reserved.</p>
              </div>
      
              <div class="right-col">
                <h1>Our Newsletter</h1>
                <div class="border"></div>
                <p>Enter Your Email to get our news and updates.</p>
                <form action="" class="newsletter-form">
                  <InputWithLogo type="text" placeholder="Enter Your Email" logo="fas fa-user" />
                  <ButtonRadious type="submit" text="submit" />
                </form>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;