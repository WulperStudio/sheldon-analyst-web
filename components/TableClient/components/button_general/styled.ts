import styled from "styled-components";

export const ButtonGeneral = styled.button`
  width: ${(props: { width?: number }) => props.width || 214}px;
  height: 45px;
  text-align: start;
  padding: 9px 0 13px 22px;
  cursor: pointer;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 3px #00000029;
  border-radius: 9px;
  border: 0;
  text-align: left;
  font: SemiBold 14px/44px Poppins;
  letter-spacing: 0px;
  color: #b4c4d5;
  line-height: 24px;
  font-weight: 600;

  ${(props: { center: boolean }) =>
    props.center
      ? `
    text-align: center;
    padding-left: 9px;
  `
      : ""}

  & img {
    margin: 0 10px 0 0;
    width: 15px;
    height: 20px;
  }
`;
