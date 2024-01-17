import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

interface IVariantType {
  [key: string]: string;
}

const textVariantStyles: IVariantType = {
  text: `
    color: var(--neutral-900, #0A0A0D);
    font-size: 26px;
    font-weight: 700;
    `,
  subtext: `
    color: var(--neutral-800, #232325);
    font-size: 16px;
    font-weight: 500;
    `
};

const textVariantStylesTab: IVariantType = {
  text: `
    @media (max-width: 834px) {
      color: var(--neutral-900, #0A0A0D);
      font-size: 22px;
      font-weight: 700;
    }
    `,
  subtext: `
    @media (max-width: 834px) {
      color: var(--neutral-800, #232325);
      font-size: 14px;
      font-weight: 500;
    }
    `
};

const textVariantStylesMobile: IVariantType = {
  text: `
    @media (max-width: 375px) {
      color: var(--neutral-900, #0A0A0D);
      font-size: 18px;
      font-weight: 700;
    }
    `,
  subtext: `
    @media (max-width: 375px) {
      color: var(--neutral-800, #232325);
      font-size: 12px;
      font-weight: 500;
    }
    `
};

const Text = styled.div<{ variant: string }>`
  ${({ variant }) => textVariantStyles[variant]}
  ${({ variant }) => textVariantStylesTab[variant]}
  ${({ variant }) => textVariantStylesMobile[variant]}
  font-family: Noto Sans;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
`;

const IconWrapper = styled.div<{}>`
  border-radius: 0.625rem;
  background: #437dff;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  padding: 0.5rem;
  margin-right: 1rem;
  @media(max-width: 834px){
    width: 3rem;
    height: 3rem;
  }
  @media(max-width: 375px){
    width: 2.5rem;
    height: 2.5rem;
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
    fill: white;
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

const Container = styled.div<{ shadow: boolean }>`
  display: inline-flex;
  flex-direction: row;
  border-radius: 0.75rem 1rem 0.75rem 0.75rem;
  padding: 0.75rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: ${({ shadow }) =>
    shadow &&
    "10px 10px 40px 1px rgba(4, 4, 36, 0.08), -10px -10px 40px 1px rgba(4, 4, 36, 0.04)"};
`;

interface CounterCardProps {
  text: string;
  subtext: string;
  iconUrl: string;
  shadow: boolean;
}

const CounterCard: React.FC<CounterCardProps> = ({
  text,
  subtext,
  iconUrl,
  shadow,
}) => {
  return (
    <Container shadow={shadow}>
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

export default CounterCard;
