import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

interface IVariantType {
  [key: string]: string;
}

const textVariantStyles: IVariantType = {
  text: `
    color: var(--neutral-800, #232325);
    font-size: 16px;
    font-weight: 700;
    `,
  subtext: `
    color: var(--neutral-800, #232325);
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
    `
};

const textVariantStylesTab: IVariantType = {
  text: `
    @media (max-width: 834px) {
      color: var(--neutral-800, #232325);
      font-size: 14px;
      font-weight: 700;
    }
    `,
  subtext: `
    @media (max-width: 834px) {
      color: var(--neutral-800, #232325);
      font-size: 14px;
      font-weight: 500;
      margin-top: 16px;
    }
    `
};

const textVariantStylesMobile: IVariantType = {
  text: `
    @media (max-width: 375px) {
      color: var(--neutral-800, #232325);
      font-size: 12px;
      font-weight: 700;
    }
    `,
  subtext: `
    @media (max-width: 375px) {
      color: var(--neutral-800, #232325);
      font-size: 12px;
      font-weight: 500;
      margin-top: 12px;
    }
    `
};

const Text = styled.div<{ variant: string }>`
  ${({ variant }) => textVariantStyles[variant]}
  ${({ variant }) => textVariantStylesTab[variant]}
  ${({ variant }) => textVariantStylesMobile[variant]}
  font-family: Noto Sans;
  font-style: normal;
  text-align: left;
`;

const IconWrapper = styled.div<{}>`
  display: flex;
  justify-content: center; // to remove
  align-items: center; // // to remove
  border-radius: 0.75rem;
  border: 2px dashed rgba(0,0,128,0.15);
  width: 4rem;
  height: 4rem;
  padding: 0.75rem;
  margin-right: 1rem;
  @media(max-width: 834px){
    width: 3rem;
    height: 3rem;
    padding: 0.313rem;
  }
  @media(max-width: 375px){
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.75rem;
  }
`;

const TextWrapper = styled.div<{}>``;

interface IconProps {
  // color: string;
}

const Icon = styled(SVG)<IconProps>`
  width: 40px;
  height: 40px;
  & path {
    fill: #000080;
  }
  @media(max-width:834px){
    width: 37px;
    height: auto;
  }
  @media(max-width:375px){
    width: 30px;
    height: auto;
  }
`;

const Container = styled.div<{ }>`
  display: inline-flex;
  flex-direction: row;
  border-radius: 0.75rem 1rem 0.75rem 0.75rem;
  border-radius: 1rem;
  background: #fff;
`;

interface DetailCardProps {
  text: string;
  subtext: string;
  iconUrl: string;
  className?:string;
}

const DetailCard: React.FC<DetailCardProps> = ({
  text,
  subtext,
  iconUrl,
  className,
}) => {
  return (
    <Container className={className}>
      <IconWrapper>
        <Icon src={iconUrl} />
      </IconWrapper>
      <TextWrapper>
        <Text variant="text">{text}</Text>
        <Text variant="subtext">{subtext}</Text>
      </TextWrapper>
    </Container>
  );
};

export default DetailCard;
