import React from 'react';
import styled from 'styled-components';

interface ContentTitleProps {
  children: React.ReactNode;
  className?:string;
}

const Title = styled.div`
  color: var(--neutral-900, #0A0A0D);
  font-family: Noto Sans;
  font-size: 2.5rem; // 40px
  font-style: normal;
  font-weight: 700;
  line-height: 3.125rem; // 50px
  text-transform: capitalize;

  @media (max-width: 834px) {
    font-size: 2rem; // 32px converted to rem
    line-height: 2.625rem; // 42px converted to rem
  }

  @media (max-width: 375px) {
    text-align: center;
    font-size: 1.375rem; // 22px converted to rem
    line-height: 2rem; // 32px converted to rem
  }
`;

const ContentTitle: React.FC<ContentTitleProps> = ({ children, className }) => {
  return <Title className={className}>{children}</Title>;
};

export default ContentTitle;