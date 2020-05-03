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
  position: relative;
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

export const ContentTwinsSelectMultiple = styled.div`
  display: flex;
  width: 344px;
`;

export const HistoryContainer = styled.div`
  width: 375px;
  height: 400px;
  border: 1px solid #d9d9d9;
  padding: 15px;
  border-radius: 2px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StatusFormContent = styled.div`
  margin: 20px 0;
`;

export const CloseDecisionMaker = styled.div`
  position: absolute;
  right: 27px;
  top: 27px;
  color: red;
  cursor: pointer;
`;

/**
 *  OPEN GRAPH ~ START
 */
export const WrapOpenGraphShow = styled.div`
  width: 344px;
  max-width: 344px;
`;

export const OpenGraphShow = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  height: 65px;
  border: 1px solid #d9d9d9;
  margin: 10px 0 0 0;
  border-radius: 2px;
  padding: 0;
`;

export const LoadingOpenGraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const IconSpinLoadingOPG = styled.img`
  width: 50px;
  height: 50px;
  z-index: 1;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 63px;
  height: 63px;
  border-radius: 2px;
  overflow: hidden;
`;

export const ImageWebOPG = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const WrapDescriptionOPG = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(100% - 63px);
  height: 63px;
  background-color: #d9d9d9;
`;

export const TitleWebOPG = styled.div`
  height: auto;
  font-size: 15px;
  font-weight: 500;
  margin: 2px 0 2px 2px;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DescriptionWebOPG = styled.div`
  height: auto;
  font-size: 10px;
  font-weight: 100;
  margin: 2px 0 0 2px;
  color: rgba(0, 0, 0, 0.65);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UrlWebOPG = styled.div`
  height: auto;
  font-size: 10px;
  font-weight: 100;
  margin: 2px 0 0 2px;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DataNoFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-weight: 100;
  font-style: italic;
  color: #afa7a7;
`;

/**
 *  OPEN GRAPH ~ END
 */
