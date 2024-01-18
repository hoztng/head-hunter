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

interface ForJobSeekersSctionProps {}

const ForJobSeekersSction: React.FC<ForJobSeekersSctionProps> = () => {
  return (
    <Container>
      <StyledInnerContainer>
        <StyledDetailsWrapper>
          <SectionTitleWrapper>Why Job Seekers Love Us?</SectionTitleWrapper>
          <ContentTitleWrapper>Get Your Dream Jobs</ContentTitleWrapper>
          <StyledCardWrapper>
            <DetailCardWrapper
              text="Diverse Opportunities Across Industries"
              subtext="Whether you're kick starting your career or a seasoned professional, our platform offers diverse roles for you across various industries."
              iconUrl="/assets/icons/ic_employee.svg"
            />
            <DetailCardWrapper
              text="Global Opportunities"
              subtext="We're a global career connector. Embrace the chance to expand your career journey worldwide  and it has no limits with us."
              iconUrl="/assets/icons/ic_global.svg"
            />
            <DetailCardWrapper
              text="Efficient Application Process"
              subtext="No more cover letters or lengthy procedures. Effortlessly navigate through opportunities, attach your tailored resume, and submit with a click."
              iconUrl="/assets/icons/ic_application.svg"
            />
          </StyledCardWrapper>
        </StyledDetailsWrapper>
        <StyledImageWrapper>
          <StyledImage src="/assets/images/job_seeker.png" />
        </StyledImageWrapper>
      </StyledInnerContainer>
    </Container>
  );
};

export default ForJobSeekersSction;
