import React from "react";
import styled from "styled-components";
import SectionTitle from "@common/components/Texts/SectionTitle";
import Container from "@common/components/Containers/Container";

const BlockquoteText = styled.p`
  font-family: Noto Sans;
  font-style: normal;
  text-align: center;
  font-size: 22px;
  line-height: 32px;
  max-width: 580px;
  margin: 0 auto;
  margin-top: 32px;
  @media (max-width: 834px) {
    font-size: 18px;
    line-height: 26px;
    max-width: 460px;
  }
  @media (max-width: 375px) {
    max-width: 314px;
    margin-top: 24px;
  }
`;

const StyledContainer = styled(Container)`
  padding: 40px 20px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  /* margin: 0 auto; */
  text-align: center;
`;

const WhyUsSection = () => {
  return (
    <StyledContainer>
      <div id="Why choose us"></div>
      <StyledSectionTitle>Why Choose Us?</StyledSectionTitle>
      <BlockquoteText>
        Whether you're a job seeker chasing your dream job or a recruiter in
        search of top-tier talent, We can elevate your journey to unprecedented
        success.
      </BlockquoteText>
    </StyledContainer>
  );
};

export default WhyUsSection;
