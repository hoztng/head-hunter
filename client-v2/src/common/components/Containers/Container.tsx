import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <StyledContainer className={className}>{children}</StyledContainer>
  );
}

export default Container;