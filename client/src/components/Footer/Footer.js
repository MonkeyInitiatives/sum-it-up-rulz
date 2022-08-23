import React from 'react';
import Logo from '../../assets/images/sum-it-up-logo.png'



const Footer = () => {
    

    return (
        <>
       
      <footer>
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-3 left-col">
            <a className="app-name" href="/"><img className="primary-logo" src={Logo} alt="Sum it up!" /></a>
            <br />
            <a href="https://github.com/SherrickM/polite-mail" target="_blank"><i className="fab fa-github" /> Project Repo</a>
            </div>
            <div className="col-9 right-col">
              <h3 className="">Contributors</h3>
              <ul className="contributors-list">
                  <li><a href="https://www.linkedin.com/in/christiana-troyon-b63315182/" target="_blank"><i className="fa-brands fa-linkedin"></i> Christiana</a></li>
                  <li><a href="https://www.linkedin.com/in/gedionadamu/" target="_blank"><i className="fa-brands fa-linkedin"></i> Gedion</a></li>
                  <li><a href="https://www.linkedin.com/in/sherrick-mcneal-725183193/" target="_blank"><i className="fa-brands fa-linkedin"></i> Sherrick</a></li>
                  <li><a href="" target="_blank"><i className="fa-brands fa-linkedin"></i> Trevor</a></li>
                  <li><a href="https://www.linkedin.com/in/hasnain-khalfan-39643a7/" target="_blank"><i className="fa-brands fa-linkedin"></i> Hasnain</a></li>
                </ul>
            </div>
          </div>
        </div>
      </footer>
    
        </>
    );
};

export default Footer

