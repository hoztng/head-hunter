import React from "react";
import styled from "styled-components";
import Container from "@common/components/Containers/Container";
import DetailCard from "@common/components/Cards/DetailCard";
import SectionTitle from "@common/components/Texts/SectionTitle";
import ContentTitle from "@common/components/Texts/ContentTitle";


export const StyledInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(auto-fit, auto);
  @media (max-width: 834px) {
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDetailsWrapper = styled.div<{reverse?:boolean}>`
  max-width: 460px;
  margin: 0 auto;
  grid-row: 1/2;
  grid-column: ${(props)=> props.reverse ? '2/3' : ''};
  @media (max-width: 750px) {
    grid-row: 2/4;
    grid-column: unset;
  }
`;

export const StyledImage = styled.img`
  @media (max-width: 1100px) {
    max-width: 450px;
  }
  @media (max-width: 1000px) {
    max-width: 400px;
  }
  @media (max-width: 834px) {
    max-width: 321px;
  }
  @media (max-width: 750px) {
    max-width: 450px;
    margin-bottom: 32px;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const StyledCardWrapper = styled.div`
  max-width:460px;  
`;

export const SectionTitleWrapper = styled(SectionTitle)`
  @media (max-width: 375px) {
    text-align: center;
  }
`;

export const ContentTitleWrapper = styled(ContentTitle)`
    margin-top: 32px;
    margin-bottom: 48px;
    @media (max-width:834px){
      margin-top: 32px;
      margin-bottom: 40px;
    }
    @media (max-width:375px){
      margin-top: 24px;
      margin-bottom: 32px;
    }
`;

export const DetailCardWrapper = styled(DetailCard)`
  &:not(:first-child) {
      margin-top: 32px;
    }
  @media (max-width:375px){
    &:not(:first-child) {
      margin-top: 24px;
    }
  }
`;