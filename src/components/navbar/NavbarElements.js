import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 110px;
  background: ${({ show }) => (show === false ? '#08080B' : '#111')};

  transition-timing-function: ease-in;
  transition: all .5s;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 3rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  @media screen and (max-width: 991px){
    margin-left: 2rem;
  }

  @media screen and (max-width: 767px){
    margin-left: 1rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  z-index:1000;

  @media screen and (max-width: 991px) {
    background-color: #08080B;
    position: absolute;
    top: 100px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }

  @media screen and (max-width: 767px) {
    background-color: #08080B;
    position: absolute;
    top: 100px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }

  @media screen and (max-width: 480px) {
    background-color: #08080B;
    position: absolute;
    top: 100px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2rem;
  color: white;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all ease;

  @media screen and (max-width: 991px) {
    width: 100%;
    font-size: 2.4rem;
    padding: 0.5rem 3rem;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 2rem;
    padding: 0.5rem 3rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 1.75rem;
    padding: 0.5rem 3rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    // position: fixed;
    // top: 40px;
    // right: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: white;
      margin-right: 1.2rem;
    }
  }
`;
