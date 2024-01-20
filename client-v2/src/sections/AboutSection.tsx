import React from 'react';
import styled from 'styled-components';
import CounterCard from '@common/components/Cards/CounterCard';
import Container from '@common/components/Containers/Container';
import SectionTitle from '@common/components/Texts/SectionTitle';
import ContentTitle from '@common/components/Texts/ContentTitle';
import SectionText from '@common/components/Texts/SectionText';

import ProfessionalCollaboration from "@assets/images/professional-collaboration.png";
import SuccessfulHiresIcon from "@assets/icons/ic_successful_hires.svg";
import CompanyIcon from "@assets/icons/ic_company.svg";

const StyledImage = styled.img`
  max-width: 604px;
  width: 100%;
  @media (max-width: 834px ) {
    max-width: 356px;
  }
  @media (max-width: 740px ) {
    max-width: none;
  }
  @media (max-width: 375px ) {
    /* max-width: 269px; */
  }
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
  @media (max-width: 834px ) {

  }
  @media (max-width: 740px ) {
    grid-template-columns: repeat(1, 1fr);
  }

`;

const StyledContentWrapper = styled.div`
  margin-left: 120px;
  max-width: 383px;
  @media (max-width: 1200px){
    margin-left: 15%;
  }
  @media (max-width: 834px ) {
    margin-left: 10%;
  }
  @media (max-width: 740px ) {
    margin-left: 0px;
    max-width: auto;
    grid-row: 1/3;
  }
  @media (max-width: 375px ) {
    text-align: center;
  }
`;

const StyledContainer = styled(Container)`
   padding: 60px 20px;
   @media (max-width: 740px ) {
    padding: 32px 20px;
  }
`

const StyledCardWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const ContentTitleWrapper = styled(ContentTitle)`
  @media (max-width: 375px ) {
    text-align: center;
  }
`;

const AboutSection:React.FC = () => {
  return (
      <StyledContainer>
      <div id="Who we are">
      <StyledGridContainer>
          <StyledImage src={ProfessionalCollaboration}/>
          <StyledContentWrapper>
            <SectionTitle>About Us</SectionTitle>
            <ContentTitleWrapper>We’re Not Just A typical job portal</ContentTitleWrapper>
            <SectionText>
              We're your career ally. Connecting companies with 
              top-notch candidates and helping job seekers find 
              their dream roles is what we do best.
            </SectionText>
            <StyledCardWrapper>
              <CounterCard  text="15 K+" subtext="Successful Hires" iconUrl={SuccessfulHiresIcon} shadow={false} />
              <CounterCard  text="10 k+" subtext="Companies Seeking Talent" iconUrl={CompanyIcon} shadow={false} />
            </StyledCardWrapper>
          </StyledContentWrapper>

      </StyledGridContainer>
      </div>
      </StyledContainer>
  )
}

export default AboutSection;