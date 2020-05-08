import styled from "styled-components";

export const WrapperLogoAside = styled.div`
  & img {
    width: 90px;
  }
`;

export const WrapperBtnSections = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 17px;
    height: 17px;
  }
`;

export const BtnItemSide = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  background-color: ${(props: { active?: boolean }) =>
    props.active ? "white" : "#004da9"};
  border: 0;
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${(props: { active?: boolean }) =>
      props.active ? "white" : "gray"};
  }
  margin: ${(props: { margin?: string }) => props.margin || ""};
`;
