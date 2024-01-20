import React from "react";
import Container from "@common/components/Containers/Container";
import {
  ContentTitleWrapper,
  DetailCardWrapper,
  SectionTitleWrapper,
  StyledCardWrapper,
  StyledDetailsWrapper,
  StyledImage,
  StyledImageWrapper,
  StyledInnerContainer,
} from "@common/components/Containers/SplitContainer";

import RecruiterImage from "@assets/images/recruiter.png";
import TalentPoolIcon from "@assets/icons/ic_talent_pool.svg";
import TalentIcon from "@assets/icons/ic_talent.svg";
import EmployerIcon from "@assets/icons/ic_employer.svg";

interface ForJobRecruitersSctionProps {}

const ForRecruitersSction: React.FC<ForJobRecruitersSctionProps> = () => {
  return (
    <Container>
      <StyledInnerContainer>
        <StyledDetailsWrapper reverse={true}>
          <SectionTitleWrapper>Why Recruiters Love Us?</SectionTitleWrapper>
          <ContentTitleWrapper>Hire Top-Tire Talents</ContentTitleWrapper>
          <StyledCardWrapper>
            <DetailCardWrapper
              text="Streamlined Recruitment Process"
              subtext="We tailors the hiring process to your needs, 
              leveraging smart candidate matching, real-time 
              insights, and innovative tools."
              iconUrl={EmployerIcon}
            />
            <DetailCardWrapper
              text="Access Top Talent Instantly"
              subtext="We accelerates your recruitment journey, connecting you with high-caliber candidates effortlessly. welcome excellence into your team."
              iconUrl={TalentIcon}
            />
            <DetailCardWrapper
              text="Diverse Talent Pools"
              subtext="Embrace diversity in your workplace. We brings together candidates from various backgrounds and experiences."
              iconUrl={TalentPoolIcon}
            />
          </StyledCardWrapper>
        </StyledDetailsWrapper>
        <StyledImageWrapper>
          <StyledImage src={RecruiterImage} />
          
        </StyledImageWrapper>
      </StyledInnerContainer>
    </Container>
  );
};

export default ForRecruitersSction;
