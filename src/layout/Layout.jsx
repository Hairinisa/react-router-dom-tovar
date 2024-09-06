import { Outlet } from "react-router-dom";
import Article from "../components/Article";
import styled from "styled-components";

export default function Layout() {
  return (
    <StyledDiv>
      <Article />
      <Outlet />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  gap: 30px;
`;
