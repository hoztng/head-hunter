import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { darken } from 'polished';

import _MenuIcon from "@assets/icons/menu.svg";
import _CloseIcon from "@assets/icons/close.svg";
import _LogoIcon from "@assets/icons/logo-icon.svg";

const sliderMoveDuration = 0.2;
const sliderColor = "white";
const headerHeight = 84;

const LinkList = styled.ul<{ open: boolean }>`
  display: flex;
  flex-grow: 1;
  max-width: 610px;
  flex-wrap: nowrap;
  justify-content: space-between;

  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: width 0s ease-in-out;
  padding-left: 50px;
  @media (max-width: 834px) {
    flex-direction: column;
    transition: width 0.3s ease-in-out;
  }
`;

const LinkItem = styled.li`
  padding: 0;
  cursor: pointer;
  @media (max-width: 834px) {
    margin: 6px 8px;
    width: 200px;
    &:hover {
      background-color: ${darken(0.1, '#f0f0f0')};
      padding-left: 6px;
    }
  }
`;

const Nav = styled.nav<{ open: boolean; navbavisible?: boolean | null }>`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  height: ${headerHeight}px;
  width: 100vw;
  z-index: 10;
  position: ${(props) => (props.navbavisible ? "static" : "fixed")};
  background-color: ${(props) =>
    props.navbavisible ? sliderColor : "rgba(255,255,255,0.6)"};
  transition: all 0.2s ease-in-out;
  top: 0;
  left: 0;
  padding: 0 119px;
  @media (max-width: 834px) {
    padding: 0 32px;
    justify-content: space-between;
    position: ${(props) => (props.open ? "fixed" : "")};
  }
  @media (max-width: 375px) {
    padding: 0 25px;
    justify-content: space-between;
    position: ${(props) => (props.open ? "fixed" : "")};
  }
`;

const LinksWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 834px) {
    display: none;
  }
`;

const MenuController = styled.img`
  display: none;
  @media (max-width: 834px) {
    height: 32px;
    display: block;
  }
  @media (max-width: 375px) {
    height: 24px;
    display: block;
  }
`;

const MenuIcon = styled(MenuController).attrs({
  src: _MenuIcon,
})``;

const CloseIcon = styled(MenuController).attrs({
  src: _CloseIcon,
})``;

const LogoIcon = styled.img`
  height: 40px;
  @media (max-width: 375px) {
    height: 29px;
  }
`;

const Slider = styled.div<{ open: boolean }>`
  background-color: ${sliderColor};
  position: fixed;
  top: ${headerHeight}px;
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: ${(props) => (props.open ? "100vw" : "0px")};
  transition: width ${sliderMoveDuration}s ease-in-out;
  padding-top: 100px;
  z-index: 3;
  @media (min-width: 834px) {
    display: none;
  }
`;

const InnerSlider = styled.div<{ open: boolean }>`
  background-color: ${sliderColor};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.open ? "100%" : "0px")};
  transition: width ${sliderMoveDuration}s ease-in-out;
  z-index: -1;
  @media (min-width: 834px) {
    display: none;
  }
`;

const Placeholder = styled.div<{
  navbarvisible: boolean | null;
  open: boolean;
}>`
  height: ${(props) => (props.navbarvisible ? "0px" : headerHeight + "px")};
  background-color: ${sliderColor};
  width: 100%;
  @media (max-width: 834px) {
    height: ${(props) => (props.open ? headerHeight + "px" : "0px")};
  }
`;

const Links: React.FC<{ open: boolean; toggleMenu?: () => void }> = ({
  open,
  toggleMenu = () => {},
}) => {

  const items: string[] = [
    "Who we are",
    "Why choose us",
    "Let’s Talk",
  ];
  
  const clickNavigationItemHandle = (itemId: string) => {
    const section = document.getElementById(itemId);
    if(section){
      const offsetTop = section.offsetTop;
      const isMobileView = window.innerWidth <= 834;
      const offsetHeight = 90;
      const offsetAmount = isMobileView ? offsetHeight + headerHeight : offsetHeight;
      window.scrollTo({
        top: offsetTop-offsetAmount,
        behavior:'smooth'
      })
    }
    toggleMenu();

  };
  return (
    <LinkList open={open}>
      {items.map((item) => (
        <LinkItem key={item} onClick={()=>{clickNavigationItemHandle(item)}}>
          {item}
        </LinkItem>
      ))}
    </LinkList>
  );
};

const Navbar = () => {
  const [navbaVisible, setNavbarVisible] = useState<boolean | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setNavbarVisible(true);
          console.log("start intersection");
        } else {
          setNavbarVisible(false);
          console.log("end intersection");
        }
      });
    });

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div ref={navRef}>
        <Nav open={open} navbavisible={navbaVisible}>
          <LogoIcon
            src={_LogoIcon}
            alt="head hunter website"
          />
          <LinksWrapper>
            <Links open={open} />
          </LinksWrapper>
          {open ? (
            <CloseIcon onClick={toggleMenu} />
          ) : (
            <MenuIcon onClick={toggleMenu} />
          )}
          <InnerSlider open={open} />
        </Nav>
      </div>
      {/* placeholder shoud be after 'Nav' because if it is before 'Nav', it will work recursively when 'Nav' move to bottom  */}
      <Placeholder open={open} navbarvisible={navbaVisible} />
      <Slider open={open}>
        <Links open={open} toggleMenu={toggleMenu} />
      </Slider>
    </>
  );
};

export default Navbar;
