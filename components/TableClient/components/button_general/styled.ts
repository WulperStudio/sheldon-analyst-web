import styled from "styled-components";

export const ButtonGeneral = styled.button`
  width: ${(props: { width?: number }) => props.width || 130}px;
  height: 40px;
  text-align: start;
  padding: 10px 0 12px 20px;
  cursor: pointer;
  background: #f9f9f9;
  border-radius: 5px;
  ${(props: { active?: boolean }) =>
    props.active &&
    `
    box-shadow: 3px 1px 10px #aec2ea;
  `}
  border: 0;
  text-align: left;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0px;
  color: ${(props: { color?: string }) => props.color || "black"};
  font-weight: 400;
  outline: none;
  font-size: 12px;
  line-height: 18px;
  margin: 0 14px 0 0;

  ${(props: { center: boolean }) =>
    props.center
      ? `
    text-align: center;
    padding-left: 9px;
  `
      : ""}

  & img {
    margin: 0 10px 0 0;
    width: 20px;
    height: 20px;
  }
`;
