import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Article() {
  return (
    <StyledPages>
      <h1>BRANDNAME</h1>
      <NavLink to={"/male"} style={{ textDecoration: "none" }}>
        <p>👨‍🦰Мужская</p>
      </NavLink>
      <NavLink to={"/children"} style={{ textDecoration: "none" }}>
        <p>👼Детская</p>
      </NavLink>
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <p>👩Женская</p>
      </NavLink>
    </StyledPages>
  );
}

const StyledPages = styled.div`
  width: 270px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 2px solid gray;
  h1{
    color: #085549e2;
  }
  p{
    color: #0000008e;
    font-size: 18px;
    font-weight: 700;
  }
`;
