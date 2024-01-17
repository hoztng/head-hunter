import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: var(--primary-500, #000080);
  font-family: Noto Sans;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem;
  text-align: inherit;
`;

interface SectionTitleProps {
  children:ReactNode;
  className?:string;
}

const SectionTitle:React.FC<SectionTitleProps> = ({children, className}) => {
  return (
    <Title className={className}>{children}</Title>
  )
}

export default SectionTitle;