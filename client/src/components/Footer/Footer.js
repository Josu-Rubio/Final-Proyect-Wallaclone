import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './styles.css';

export default function Footer() {
  return (
    <footer className='Footer'>
      <Container>
        <Grid container spacing={3} className='Footer__row'>
          <Grid item xs={12} sm={6} className='Footer-item mt-3 mt-lg-0'>
            <FooterAddress />
          </Grid>
          <Grid item xs={12} sm={6} className='Footer-item links mt-3 mt-lg-0'>
            <FooterLinks />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

function FooterAddress() {
  return (
    <div className='Footer__section'>
      <h2 className='Footer__title'>Contact</h2>
      <div className='Footer__content'>
        <p>For any sugestion:</p>
        <div className='Footer__block'>
          <MailOutlineIcon className='Mail__Icon' />
          <span></span>
          <a href='mailto: josu_mr@hotmail.com'>josu_mr@hotmail.com</a>
        </div>
        <p>You can also visit us on:</p>
        <div className='SocialLinks'>
          <a
            className='SocialLinks__link SocialLinks__link--github'
            href='https://github.com/Josu-Rubio'
          >
            <GitHubIcon />
          </a>
          <a
            className='SocialLinks__link SocialLinks__link--linkedin'
            href='https://www.linkedin.com/in/josue-rubio/'
          >
            <LinkedInIcon />
          </a>
          <a
            className='SocialLinks__link SocialLinks__link--instagram'
            href='https://www.instagram.com/josurbio/'
          >
            <InstagramIcon />
          </a>
          <a
            className='SocialLinks__link SocialLinks__link--twitter'
            href='https://twitter.com/JosuRubio'
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className='Footer__section'>
      <h2 className='Footer__title'>Links</h2>
      <div className='Footer__content Footer__content--center'>
        <a className='Footer__link' href='https://github.com/Josu-Rubio'>
          This Website Repository
        </a>
      </div>
    </div>
  );
}
