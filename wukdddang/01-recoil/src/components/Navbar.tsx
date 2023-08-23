import { styled } from "styled-components";
import { Link } from "react-router-dom";
import logo from "/vite.svg";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #fff;
`;

const Header = styled.header`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Nav = styled.nav`
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;

  & > .url-route {
    font-weight: bold;
    cursor: pointer;
  }
`;

export default function Navbar() {
  return (
    <HeaderWrapper>
      <Header>
        <Link to={"/"} aria-label="홈으로 이동">
          <img src={logo} alt="logo" width="48" height="48" />
        </Link>
        <Nav>
          <Link className="url-route" to={"/"} aria-label="홈으로 이동">
            홈
          </Link>
          <Link className="url-route" to={"/cart"} aria-label="장바구니로 이동">
            장바구니
          </Link>
        </Nav>
      </Header>
    </HeaderWrapper>
  );
}
