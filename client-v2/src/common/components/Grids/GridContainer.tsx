import React from 'react';
import styled from 'styled-components';

interface GridContainerProps {
  children: React.ReactNode;
  columns: number;
  gap: number;
};

const StyledGridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${props => props.gap}px;
`;

export const GridContainer: React.FC<GridContainerProps> = ({ children, columns, gap }) => {
  return <StyledGridContainer columns={columns} gap={gap}>{children}</StyledGridContainer>;
};