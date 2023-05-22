import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer,FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights } from './FooterElements';
const Footer = () => {
  return (
    <FooterContainer>
       <FooterWrap>
         <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems className='about'>
                    <FooterLinkTitle>About us</FooterLinkTitle>
                       <FooterLink to="/signin">How it Works</FooterLink>
                       <FooterLink to="/signin">Testimonials</FooterLink>
                       <FooterLink to="/signin">Careers</FooterLink>
                       <FooterLink to="/signin">Investors</FooterLink>
                       <FooterLink to="/signin">Terms of Services</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems className='contact'>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                       <FooterLink to="/">Contact</FooterLink>
                       <FooterLink to="/">Support</FooterLink>
                       <FooterLink to="/">Destinations</FooterLink>
                       <FooterLink to="/">Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems className='videos'>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                       <FooterLink to="/">Submit Video</FooterLink>
                       <FooterLink to="/">Ambassdors</FooterLink>
                       <FooterLink to="/">Agency</FooterLink>
                       <FooterLink to="/">Influencer</FooterLink>
                </FooterLinkItems>

                <FooterLinkItems className='socials' >
                        <FooterLink style={{ fontSize: '20px',position:"relative",right:"3rem",top:"12rem" }}><FaInstagram /> </FooterLink> 
                        <FooterLink><FaFacebook style={{ fontSize: '20px',position:"relative",right:"-0.3rem",top:"10rem" }} /> </FooterLink>
                        <FooterLink><FaYoutube style={{ fontSize: '20px',position:"relative",right:"-4.3rem",top:"8rem" }} /> </FooterLink>
                        <FooterLink><FaTwitter style={{ fontSize: '20px',position:"relative",right:"-8.7rem",top:"6.3rem" }} /> </FooterLink>
                        <FooterLink><FaLinkedin style={{ fontSize: '20px',position:"relative",right:"-12.3rem",top:"4.5rem" }} /> </FooterLink>

                </FooterLinkItems>
            </FooterLinksWrapper>
         </FooterLinksContainer>
         <SocialMedia>
            <SocialMediaWrap>
                {/* bug fix - #issue 36 change incorrect link  */}
                <SocialLogo to='/UMatter/'>
                    UMatter
                </SocialLogo>
                <WebsiteRights>UMatter © {new Date().getFullYear()}&nbsp;
                All rights reserved.</WebsiteRights>
                
            </SocialMediaWrap>
         </SocialMedia>
       </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;