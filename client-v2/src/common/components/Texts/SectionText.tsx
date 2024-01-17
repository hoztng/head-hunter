import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionTextProps {
    children:ReactNode
}

const Text = styled.p`
  color: var(--neutral-800, #232325);
  font-family: Noto Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  @media (max-width: 834px) {
    font-size: 0.875rem;
    line-height: 1.375rem;
  }

  @media (max-width: 375px) {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
`;

const SectionText:React.FC<SectionTextProps> = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default SectionText;