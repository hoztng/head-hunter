import React from 'react';
import styled, { css } from 'styled-components';
import backgroundImage from '../assets/images/hero-background.png'; 
import Button from '@common/components/Buttons/Button';

// Styled button component
const GradientBackground = styled.div<{  }>`
   background: linear-gradient(289deg, #BACFFF -8.45%, #437DFF 100%);
   position: relative;
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center; 
   height: 700px;
   padding-left: 6%;
   @media (max-width:  834px) {
    padding-left: 3.8%;
    padding-top: 3.8%;
    align-items: flex-start; 
  }
  @media (max-width:  800px) {
    padding-left: 3.8%;
    padding-top: 3.8%;
    align-items: flex-start; 
  }
  
   @media (max-width:  375px) {
    align-items: flex-end; 
    padding-bottom: 15%;
    padding-left: 0;

  }
  
`;

const HeroImage = styled.img<{}>`
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 70%;
  max-width: 1030px;
  @media (max-width:  834px) {
    width: 80%;
  }
  @media (max-width: 830px) and (min-width: 555px) {
    width: 664px;
  }
  @media (max-width: 555px) and (min-width: 420px) {
    width: 95%;
  }
  @media (max-width:  375px) {
    top: 0px;
    left: 50%;
    transform: translate(-66%, 0);
    width: 150%;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;
  margin: 0;
  color: var(--neutral-white, #FFF);

  // Web styles
  font-size: 4.5rem; // 72px
  line-height: 5.625rem; // 90px

  // Tab styles
  @media (max-width:  834px) {
    font-size: 4rem; // 64px
    line-height: 4.875rem; // 78px
  }

  // Mobile styles
  @media (max-width:  375px) {
    font-size: 2.25rem; // 36px
    line-height: 2.75rem; // 44px
  }
`;

const Subtitle = styled.h2<{variant:string}>`
  font-style: normal;
  font-weight: 500;
  color: var(--neutral-white, #FFF);
  margin: 0.625rem 0;

  // Web styles for subtitle 1
  ${props => props.variant === 'subtitle1' && css`
    font-size: 1.375rem; // 22px
    line-height: 2rem; // 32px

    @media (max-width:  834px) {
      font-size: 1.125rem; // 18px
      line-height: 1.625rem; // 26px
    }
  `}

  // Web styles for subtitle 2
  ${props => props.variant === 'subtitle2' && css`
    font-size: 1.125rem; // 18px
    line-height: 1.625rem; // 26px

    @media (max-width:  834px) {
      font-size: 1rem; // 16px
      line-height: 1.5rem; // 24px
    }

    @media (max-width:  375px) {
      font-size: 0.875rem; // 14px
      line-height: 1.25rem; // 20px
    }
  `}
`;

const TextContainer = styled.div`
  text-align: left;
  max-width: 605px;
  @media (max-width:  834px) {
    max-width: 540px;
  }
  @media (max-width:  375px) {
    text-align: center;
    max-width: 335px;
  }

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 375px) {
    /* flex-direction: column;
    gap: 0px; // Remove gap for vertical stacking */
    justify-content: center;
  }
`;


const HeroSection = () => {
  return (
    <GradientBackground>
      
      
      <TextContainer>
      <Title>Simplify your Hiring Process</Title>
      <Subtitle variant="subtitle1">We connect companies with the best candidates</Subtitle>
      <Subtitle variant="subtitle2">Connect with Head Hunter today!</Subtitle>
      <ButtonContainer>
        <Button size='small' variant="primary">Find your next hire</Button>
        <Button size='small' variant="secondary">Find your next job</Button>
      </ButtonContainer>
      </TextContainer>
      <HeroImage src={backgroundImage} alt="head hunter"/>
    </GradientBackground>
  )
}

export default HeroSection;