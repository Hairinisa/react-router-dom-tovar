import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../store/thunk/productThunk";
import { useEffect } from "react";
import styled from "styled-components";

export default function WomenPage() {
  const dispatch = useDispatch();
  const { tovar } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <StyledWrapper>
      <StyledSection>
        <h3>Женская</h3>
        <button>+ Добавить</button>
      </StyledSection>
      <StyledContainer>
        {tovar.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <hr />
            <StyledItem>
              <StyledImage>
                <img src={item.image} alt="" />
              </StyledImage>

              <StyledText>
                <p>Размеры в наличии</p>

                <p>{item.sizes}</p>
                <h3>{item.price}Сом</h3>
              </StyledText>
            </StyledItem>
          </div>
        ))}
      </StyledContainer>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const StyledSection = styled.div`
  width: 1000px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  button {
    background-color: black;
    color: white;
    width: 100px;
    height: 30px;
    border-radius: 7px;
  }
`;
const StyledItem = styled.section`
  display: flex;
  justify-content: space-between;
`;
const StyledContainer = styled.div`
  height: fit-content;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  div {
    padding: 10px;
  }
  div > p {
    margin-bottom: 5px;
  }
`;

const StyledImage = styled.div`
  display: flex;
  width: 100px;
  height: 150px;
  border-radius: 7px;
`;

const StyledText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
