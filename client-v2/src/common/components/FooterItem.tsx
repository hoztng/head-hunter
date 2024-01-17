import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Icon = styled.svg<{ active: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(-90deg); // Default state, icon pointing down
  ${({ active }) =>
    active &&
    css`
      transform: rotate(0deg); // Rotates the icon 180 degrees when active
    `}
  @media (min-width: 767px) {
    opacity:0;
  }
`;

// Styled components
const FooterSection = styled.div`
  @media (min-width: 768px) {
    // Styles for desktop
    display: block;
  }

  @media (max-width: 767px) {
    // Styles for mobile
    .footer-links {
      overflow: hidden;
      transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
      max-height: 0; // Start with max-height 0
      padding: 0 15px; // Adjust padding if needed
    }

    &.active .footer-links {
      max-height: 500px; // Set a max-height that is higher than what the content will ever be
      padding: 15px; // Adjust padding to show content
    }
  }
`;

const FooterTitle = styled.h4`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    cursor: default;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 5px;
  }
`;

interface FooterItemProps{
    title: string;
    items:string[];
}

// Footer item component
const FooterItem: React.FC<FooterItemProps> = ({ title, items }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <FooterSection className={isActive ? 'active' : ''}>
      <FooterTitle onClick={toggleDropdown} className={isActive ? 'active' : ''}>
        {title}
        <Icon
          active={isActive}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Replace path data with your icon's path data */}
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Icon>
      </FooterTitle>
      <LinksList className="footer-links">
        {items.map((item, index) => (
          <LinkItem key={index}>{item}</LinkItem>
        ))}
      </LinksList>
    </FooterSection>
  );
};

export default FooterItem;
