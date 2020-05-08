import styled from "styled-components";

export const IconRoundBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #b4c4d5;
  margin: 0 5px 0 0;
`;

export const TimeLineStatus = styled.div`
  color: ${(props: { pending?: boolean }) =>
    props.pending ? "#45d9d5" : "#f86a80"};
  &:after {
    position: absolute;
    top: 17px;
    left: 0;
    width: 10px;
    height: 10px;
    content: " ";
    border-radius: 50%;
    background-color: ${(props: { pending?: boolean }) =>
      props.pending ? "#45d9d5" : "#f86a80"};
  }
  & span {
    white-space: nowrap;
  }
`;

export const TimeLineSubTitle = styled.div`
  text-align: left;
  letter-spacing: 0px;
  color: #858686;
  font-size: 12px;
`;

export const WindowLineInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px 0;
  line-height: 16px;
  & span {
    font-size: 12px;
    color: white;
  }
  & span a {
    font-size: 12px;
    color: white;
    text-decoration: none;
    font-weight: 700;
  }
  & span:first-child {
    font-weight: 700;
  }
  & span:last-child {
    font-weight: 400;
  }
`;

export const TitleTags = styled.div`
  color: white;
  font-weight: 700;
`;

export const ListTags = styled.div`
  color: white;
  font-weight: 400;
  text-align: justify;
`;
