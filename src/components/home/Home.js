import styled from "styled-components";
import { connect } from "react-redux";
import Header from "../header/Header";
import Leftside from "../leftside/Leftside";
import Main from "../main/Main";
import Rightside from "../rightside/Rightside";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      {!props.user && navigate("/")}
      <Header />
      <Section>
        <h5>
          <a>Hiring in a hurry?-</a>
        </h5>
        <p>
          Find a talented pros in record time with Upwork and keep business
          moving
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 67px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.section`
  min-height: 50px;
  padding: 16px;
  box-sizing: content-box;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    text-align: center;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  grid-gap: 5px;
  /* grid-template-rows: auto; */
  margin: 24 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(Home);
