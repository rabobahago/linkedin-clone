import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/image/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <Signin>Sign in</Signin>
        </div>
      </Nav>
    </Container>
  );
};
const Container = styled.div`
  padding: 0;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  padding: 10px 12px;
  font-size: 16px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    cursor: pointer;
    outline: 0.5px solid rgba(0, 0, 0, 0.6);
  }
`;
const Signin = styled.a`
  box-sizing: insert 0 0 0 1px #0a66c2;
  padding: 10px 24px;
  font-size: 16px;
  text-decoration: none;
  transition-duration: 167ms;
  outline: 0.5px solid #0e76a8;
  text-align: center;
  font-weight: 600;
  color: #0e76a8;
  line-height: 40px;
  margin: 5px;
  border-radius: 24px;
  &:hover {
    cursor: pointer;
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

export default Login;
