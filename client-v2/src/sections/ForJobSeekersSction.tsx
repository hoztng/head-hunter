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

import EmployeeIcon from "@assets/icons/ic_employee.svg";
import GlobalIcon from "@assets/icons/ic_global.svg";
import ApplicationIcon from "@assets/icons/ic_application.svg";
import JobSeekerImage from "@assets/images/job_seeker.png";

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
              iconUrl={EmployeeIcon}
            />
            <DetailCardWrapper
              text="Global Opportunities"
              subtext="We're a global career connector. Embrace the chance to expand your career journey worldwide  and it has no limits with us."
              iconUrl={GlobalIcon}
            />
            <DetailCardWrapper
              text="Efficient Application Process"
              subtext="No more cover letters or lengthy procedures. Effortlessly navigate through opportunities, attach your tailored resume, and submit with a click."
              iconUrl={ApplicationIcon}
            />
          </StyledCardWrapper>
        </StyledDetailsWrapper>
        <StyledImageWrapper>
          <StyledImage src={JobSeekerImage} />
        </StyledImageWrapper>
      </StyledInnerContainer>
    </Container>
  );
};

export default ForJobSeekersSction;
