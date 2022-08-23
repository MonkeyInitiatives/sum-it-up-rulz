
import {
  AppBar, Toolbar, List, Typography
} from '@material-ui/core';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Auth from '../../utils/auth';
import Logo from '../../assets/images/sum-it-up-logo.png'


const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <header>
        <div className="nav">

          <a className="app-name" component={Button} href="/"><img className="primary-logo" src={Logo} alt="Sum it up!" /></a>
          <div className="justify-content-center">
            <div>
              {Auth.loggedIn() ? (
                <>
                  <Button className="btn-logout" href="/" onClick={logout}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-log-out" viewBox="0 0 24 24">
                      <defs />
                      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
                    </svg>
                  </Button>
                

                </>
              ) : (
                <>
                  <Button className="btn-login m-3" href="/login">Sign In</Button>
                  <Button className="btn-logout " href="/signup">Sign Up</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header