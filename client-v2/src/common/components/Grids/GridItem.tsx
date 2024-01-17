import React from 'react';
import styled from 'styled-components';

interface GridItemProps {
    children: React.ReactNode
}

const StyledGridItem = styled.div`
  // Add styles for grid items here
`;

export const GridItem: React.FC<GridItemProps> = ({ children }) => {
  return <StyledGridItem>{children}</StyledGridItem>;
};