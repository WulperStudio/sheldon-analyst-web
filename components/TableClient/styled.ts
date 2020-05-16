import styled from "styled-components";

/**
 * GENERAL TABLE
 */

export const WrapperTable = styled.div`
  position: relative;
  background-color: white;
  border-collapse: collapse;
  font-family: "Poppins", sans-serif;
  padding: 16px 0 16px 0;
  margin: 10px 20px 0 20px;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;

  margin: 150px 0 0 25px;
`;

export const TableHead = styled.thead`
  text-align: left;
  font: Bold 12px Poppins;
  letter-spacing: 0px;
  color: #b4c4d5;
`;

export const TableH = styled.th`
  padding: 0 10px 13px 10px;
  white-space: nowrap;
  text-align: center;
`;

export const TableR = styled.tr`
  &:nth-child(even) {
    background: white;
  }
  &:nth-child(odd) {
    background: #eff0f8;
  }
`;

export const TableD = styled.td`
  height: 70px;
`;

export const ContentTableD = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: { justify: string }) => props.justify || "center"};
  position: relative;
  padding: 10px 15px;

  &:hover .general-window {
    display: block;
  }
`;

export const TitleGeneralInto = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${(props: { color: string }) => props.color || "#343536"};
`;

export const SubTitleGeneralInto = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props: { color?: string }) => props.color || "#858686"};
`;

export const WrapperTitleSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 150px;
  text-align: ${(props: { center: boolean }) => (props.center ? "center" : "")};
`;

export const PictureGeneralProfile = styled.div`
  border-radius: 50px;
  width: ${(props: { size?: string }) => (props.size === "medium" ? 40 : 30)}px;
  height: ${(props: { size?: string }) =>
    props.size === "medium" ? 40 : 30}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  margin: 0 10px 0 0;

  & img {
    width: ${(props: { size?: string }) =>
      props.size === "medium" ? 40 : 30}px;
    border-radius: 50%;
  }
`;

export const SuperBadgeItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
  background-color: ${(props: { background?: string }) =>
    props.background || "#e80d0d19"};
  border-radius: 50%;
  color: ${(props: { color?: string }) => props.color || "#ff6b81"};
  font-size: 10px;
`;

export const TitleSubTitleCenter = styled.div`
  & ${WrapperTitleSubTitle} {
    text-align: center;
  }
`;

export const WindowGeneralPurpose = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  left: -14px;
  min-width: 205px;
  min-height: auto;
  width: ${(props: { width?: number }) => `${props.width}px` || "auto"};
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props: { light?: boolean }) =>
    props.light ? "white" : "#13243b"};
  box-shadow: 0px 0px 12px #00000029;
  border-radius: 8px;
  margin: 0 0 10px 0;
  padding: 17px 14px 14px 17px;
  z-index: 1;
`;

/**
 * CHECKBOX
 */

export const CheckBoxWithText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxText = styled.div`
  margin: 0 0 0 10px;
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border: 2px solid #b4c4d5;
  border-radius: 3px;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  &:after {
    ${(props: { size: 15 | 20 }) =>
      props.size === 15
        ? `
          left: 3px;
          top: 1px;
          width: 5px;
          height: 7px;
        `
        : `
          left: 5px;
          top: 1px;
          width: 7px;
          height: 10px;
        `}
    border: solid gray;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const WrapperCheckBox = styled.label`
  display: block;
  position: relative;
  padding-left: 0;
  margin-bottom: 0;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: ${(props: { size: number }) => props.size}px;
  width: ${(props: { size: number }) => props.size}px;

  & ${CheckMark} {
    height: ${(props: { size: number }) => props.size}px;
    width: ${(props: { size: number }) => props.size}px;
  }

  & ${CheckMark}:after {
    ${(props: { size: 15 | 20 }) =>
      props.size === 15
        ? "left: 3px; top: 1px; width: 5px; height: 7px;"
        : "left: 5px; top: 1px; width: 7px; height: 10px;"}
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ ${CheckMark} {
    background-color: #ccc;
  }

  & input:checked ~ ${CheckMark}:after {
    display: block;
  }
`;

/**
 *  COMPANY
 */

export const WrapperCompany = styled.div`
  display: flex;
  flex-direction: row;
`;

/**
 * TAGS
 */

export const ContentTags = styled.div`
  position: relative;
  width: 145px;
  height: 34px;
  color: #b4c4d5;
  overflow: hidden;
  font-weight: 400;
  font-size: 12px;
`;

/**
 * TIMELINE
 */

export const TimeLineItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-width: 160px;
`;

export const WrapperTimeLineItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const TimeLineItemBag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1px;
  left: 21px;
  width: 10px;
  height: 10px;
  background-color: ${(props: { color?: string }) => props.color || "#ff6b81"};
  border-radius: 50%;
  color: white;
`;

export const WindowChanges = styled.div`
  position: absolute;
  top: 78px;
  left: 0;
  width: 280px;
  height: 343px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 12px #00000029;
  border-radius: 5px;
  margin: 0 0 10px 0;
  padding: 20px 0 0 10px;

  & .ant-steps-icon-dot {
    width: 15px !important;
    height: 15px !important;
    background-color: white !important;
    border: 2px solid #70a1ff !important;
  }

  & .ant-steps-item-tail {
    left: -6px !important;
  }

  & .ant-steps-item-content {
    width: 220px;
  }

  & .ant-steps-item-title {
    font-size: 12px;
    font-weight: 700;
    color: #636363;
    margin: 6px 0 0 0;

    & span:nth-child(2) {
      color: #70a1ff;
    }
  }

  & .ant-steps-item-description {
    font-size: 12px;
    font-weight: 700;
    color: #b3b3b3;

    & div {
      margin: 4px 0 0 0;
    }

    & div:nth-child(2) {
      color: #004da9;
    }

    & .ant-steps-item-tail::after {
      background-color: #eceff2 !important;
    }
  }
`;

/**
 * SIMILARS
 */

export const WrapperSimilars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 130px;

  & ${PictureGeneralProfile} {
    margin: 0 -10px 0 0;
  }

  & ${SuperBadgeItem} {
    background: #707070;
    color: white;
    width: 40px;
    height: 40px;
    font-weight: 500;
  }
`;

export const SimilarCounter = styled.div``;
