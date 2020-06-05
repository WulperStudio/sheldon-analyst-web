import styled from "styled-components";

export const WrapperFloatWindow = styled.div`
  display: ${(props: { active?: boolean }) =>
    props.active ? "block" : "none"};
  top: 50px;
  position: absolute;
  left: 0;
  width: 294px;
  height: 173px;
  background: #ffffff;
  border: 1px solid #613eea;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 5px 0 0 0;
`;
