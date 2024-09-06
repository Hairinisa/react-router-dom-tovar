import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MalePage() {
  return (
    <StyledWrapper>
      <h1>MalePage</h1>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <button>go to home page</button>
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    background-color: #45906d;
    border: none;
    padding: 10px;
    border-radius: 7px;
    color: white;
  }
`;
