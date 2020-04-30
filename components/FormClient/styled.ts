import styled from "styled-components";

export const TitleFormGeneral = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

export const TitleSectionForm = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin: 25px 0 25px 0;
`;

export const Content = styled.div`
  margin: auto;
  max-width: 700px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconItem = styled.span`
  img {
    margin: 0 0 1px 0;
  }
`;

export const BtnSelectMultiple = styled.div`
  position: absolute;
  top: -26px;
  right: 26px;
  width: 18px;
  height: 25px;
  z-index: 1;
  cursor: pointer;
  color: #0270e0;
  font-size: 18px;
`;

export const HistoryContainer = styled.div`
  width: 375px;
  height: 400px;
  border: 1px solid #0144BF;
  padding: 15px;
  border-radius: 2px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StatusFormContent = styled.div`
  margin: 20px 0;
`;
