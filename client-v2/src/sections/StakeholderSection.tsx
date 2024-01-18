import Container from "@common/components/Containers/Container";
import React from "react";
import styled from "styled-components";

const StyledIcon = styled.img`
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  &:hover {
    filter: none;
  }
  @media (max-width: 1000px) {
    height: 40px;
  }
`;

const Text = styled.p<{variant: string}>`
    color: var(--neutral-900, #0A0A0D);
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem;
    font-weight: ${(props)=> props.variant === 'bold' ? '600' : '400' };
    font-size: ${(props)=> props.variant === 'bold' ? '16px' : '14px' };
    @media (max-width: 834px) {
      text-align: center;
    }
`;

const TextWrapper = styled.div`
    min-width: 263px;
    @media (max-width: 500px) {
      min-width: auto;
  }
`;
const IconWrapper = styled.div`
   display: flex;
   flex-grow: 1;
   justify-content: space-between;
  @media (max-width: 834px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    justify-content: space-evenly;
  }

`;

const Container2 = styled.div`
  background: #F8F5FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap:64px;
  height: 104px;
  padding: 0 auto;
  @media (max-width: 1000px) {
    height: 80px;
  }
  @media (max-width: 834px) {
    padding: 0 32px;
    flex-direction: column;
    align-items: stretch;
    height: auto;
  }
  @media (max-width: 375px) {
    padding: 0 25px;
  }

`;

const OutContainer = styled.div`
  background: #F8F5FF;
`;


// const StyledContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

const StakeholderSection: React.FC = () => {
  return (
    <OutContainer>
    <Container>
    <Container2>
        <TextWrapper>
            <Text variant='bold'>Featured Companies</Text>
            <Text variant='regular' >Our candidates have been hired by</Text>
        </TextWrapper>
        <IconWrapper>
        <StyledIcon src="/assets/icons/Logo WSO2.svg" />
        <StyledIcon src="/assets/icons/Logo Amazon.svg" />
        <StyledIcon src="/assets/icons/Logo IBM.svg" />
        <StyledIcon src="/assets/icons/Logo Intel.svg" />
        <StyledIcon src="/assets/icons/Logo Microsoft.svg" />
        </IconWrapper>
    </Container2>
    </Container>
    </OutContainer>
  );
};

export default StakeholderSection;
