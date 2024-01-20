import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import Container from "@common/components/Containers/Container";

import FbIcon from "@assets/icons/fb.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";
import TwiterIcon from "@assets/icons/twiter.svg";
import _LogoIcon from "@assets/icons/logo-icon.svg";

const FooterText = styled.p`
  color: var(--neutral-800, #232325);
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 24px;
  @media (max-width: 834px) {
    font-size: 14px;
    line-height: 24px;
  }
  @media (max-width: 550px) {
    text-align: center;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  
  }
`;

const FooterTitle = styled.p`
  color: var(--neutral-900, #0a0a0d);
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  @media (max-width: 834px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 16px;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 32px;
  }
`;

const GridItem = styled.div<{verticalAlign?:string, horizontalAlign?:string}>`
  display: flex;
  flex-direction: column;
  @media (max-width:550px){
    align-items: center;
  }
`;

const CopyrightText = styled.p`
  color: #858586;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  margin-top: 40px;
  @media (max-width:834px){
    margin-top: 30px;
  }
  @media (max-width:375px){
    margin-top: 20px;
  }
`;

const FooterContainer = styled.footer`
  background-color: #f4f4ff;
  padding-top: 50px;
  @media (max-width:1200px){
    padding-top: unset;
  }
`;

const LogoIcon = styled.img`
  height: 40px;
  @media (max-width: 375px) {
    height: 29px;
  }
`;

const IconWrapper = styled.div<{}>`
  border-radius: 6px;
  background: #000080;
  width: 2rem;
  height: 2rem;
  padding: 0.375rem;
  cursor: pointer;
`;

const Icon = styled(SVG)`
  width: 20px;
  height: 20px;
  & path {
    fill: white;
  }
`;

const IconListWrapper = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 128px;
  flex-grow: 1;
  margin-top: 24px;
`;

const Footer:React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <GridContainer>
          <GridItem verticalAlign="center" horizontalAlign="center">
            <LogoIcon
              src={_LogoIcon}
              alt="head hunter website"
            />
            <FooterText>
              Your gateway to limitless career possibilities. Explore, connect,
              and elevate your professional journey with us.
            </FooterText>
          </GridItem>
          <GridItem>
            <FooterTitle>Call Us</FooterTitle>
            <FooterText>(+64) 245 550 112</FooterText>
          </GridItem>
          <GridItem>
            <FooterTitle>Write Us</FooterTitle>
            <FooterText>Jobhunter@gmail.com</FooterText>
          </GridItem>
          <GridItem >
            <FooterTitle >Let’s Connect</FooterTitle>
            <IconListWrapper>
              <IconWrapper onClick={() => window.open('https://www.facebook.com', '_blank')}>
                <Icon src={FbIcon}/>
              </IconWrapper>
              <IconWrapper onClick={() => window.open('https://www.linkedin.com', '_blank')}>
                <Icon src={LinkedinIcon}/>
              </IconWrapper>
              <IconWrapper onClick={() => window.open('https://www.twitter.com', '_blank')}>
                <Icon src={TwiterIcon}/>
              </IconWrapper>
            </IconListWrapper>
          </GridItem>
        </GridContainer>
        <CopyrightText>© 2024 Head Hunter. All rights reserved.</CopyrightText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
