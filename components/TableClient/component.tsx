import React from "react";
import { Steps } from "antd";
import { connect, ConnectedProps } from "react-redux";
import { TagOutlined } from "@ant-design/icons";

import RickProfile from "@assets/rick.jpg";

import {
  WrapperTable,
  TableHead,
  TableH,
  TableD,
  ContentTableD,
  TitleGeneralInto,
  SubTitleGeneralInto,
  WrapperTitleSubTitle,
  PictureGeneralProfile,
  SuperBadgeItem,
  TitleSubTitleCenter,
  // -
  CheckBoxWithText,
  WrapperCheckBox,
  CheckMark,
  CheckBoxText,
  // -
  WrapperCompany,
  WrapperIconCompany,
  // -
  ContentTags,
  // -
  TimeLineItems,
  WrapperTimeLineItem,
  TimeLineItemBag,
  // -
  WrapperSimilars,
  // -
  WindowChanges,
} from "./styled";

const { Step } = Steps;

const connector = connect(null, null);

type Props = ConnectedProps<typeof connector>;

const TableClients: React.FunctionComponent<Props> = () => {
  return (
    <WrapperTable>
      <table>
        <TableHead>
          <tr>
            <TableH>
              <CheckBoxWithText>
                <WrapperCheckBox size={15}>
                  <input type="checkbox" checked={true} />
                  <CheckMark></CheckMark>
                </WrapperCheckBox>
                <CheckBoxText>Select</CheckBoxText>
              </CheckBoxWithText>
            </TableH>
            <TableH>Company</TableH>
            <TableH>Decision Market</TableH>
            <TableH>Tags</TableH>
            <TableH>Timeline</TableH>
            <TableH>Similars</TableH>
            <TableH>Changes</TableH>
            <TableH>Source</TableH>
            <TableH>Purchases</TableH>
          </tr>
        </TableHead>
        <tbody>
          <tr>
            <TableD>
              <ContentTableD>
                <WrapperCheckBox size={20}>
                  <input type="checkbox" checked={true} />
                  <CheckMark></CheckMark>
                </WrapperCheckBox>
              </ContentTableD>
            </TableD>
            <TableD>
              <ContentTableD>
                <WrapperCompany>
                  <WrapperIconCompany>
                    <TagOutlined />
                  </WrapperIconCompany>
                  <WrapperTitleSubTitle>
                    <TitleGeneralInto>Tracsa Group</TitleGeneralInto>
                    <SubTitleGeneralInto color="#0144bf">
                      www.tracsa.com.ar
                    </SubTitleGeneralInto>
                  </WrapperTitleSubTitle>
                </WrapperCompany>
              </ContentTableD>
            </TableD>
            <TableD>
              <ContentTableD>
                <PictureGeneralProfile>
                  <img src={RickProfile} alt="Decision Market" />
                </PictureGeneralProfile>
                <WrapperTitleSubTitle>
                  <TitleGeneralInto>Roberto Gomezino</TitleGeneralInto>
                  <SubTitleGeneralInto>Marketing Manager</SubTitleGeneralInto>
                </WrapperTitleSubTitle>
              </ContentTableD>
            </TableD>
            <TableD>
              <ContentTableD>
                <ContentTags>
                  <span>
                    Soccer; 2 kids; Beach; Veggie; Soccer; 2 kids; Beach;
                    Veggie; Soccer; 2 kids; Beach; Veggie; Soccer; 2 kids;
                    Beach; Veggie;
                  </span>
                </ContentTags>
              </ContentTableD>
            </TableD>
            <TableD>
              <ContentTableD>
                <TimeLineItems>
                  <WrapperTimeLineItem>
                    <TimeLineItemBag />
                    <SuperBadgeItem>AP</SuperBadgeItem>
                  </WrapperTimeLineItem>
                  <WrapperTimeLineItem>
                    <TimeLineItemBag />
                    <SuperBadgeItem>AP</SuperBadgeItem>
                  </WrapperTimeLineItem>
                  <WrapperTimeLineItem>
                    <TimeLineItemBag />
                    <SuperBadgeItem>AP</SuperBadgeItem>
                  </WrapperTimeLineItem>
                  <WrapperTimeLineItem>
                    <TimeLineItemBag />
                    <SuperBadgeItem>AP</SuperBadgeItem>
                  </WrapperTimeLineItem>
                </TimeLineItems>
              </ContentTableD>
            </TableD>
            <TableD>
              <ContentTableD>
                <WrapperSimilars>
                  <PictureGeneralProfile>
                    <img src={RickProfile} alt="Decision Market" />
                  </PictureGeneralProfile>
                  <PictureGeneralProfile>
                    <img src={RickProfile} alt="Decision Market" />
                  </PictureGeneralProfile>
                  <PictureGeneralProfile>
                    <img src={RickProfile} alt="Decision Market" />
                  </PictureGeneralProfile>
                  <SuperBadgeItem>+429</SuperBadgeItem>
                </WrapperSimilars>
              </ContentTableD>
            </TableD>
            <TableD>
              <ContentTableD>
                <WindowChanges className="window-changes">
                  <Steps progressDot current={1} direction="vertical">
                    <Step
                      title={
                        <>
                          <span>Visualized</span>&nbsp;
                          <span>#1st Approach</span>
                        </>
                      }
                      description={
                        <>
                          <div>Tracsa</div>
                          <div>March 05</div>
                        </>
                      }
                    />
                    <Step
                      title={
                        <>
                          <span>Change phone</span>&nbsp;
                          <span>#See Text</span>
                        </>
                      }
                      description={
                        <>
                          <div>Proglobal</div>
                          <div>March 05</div>
                        </>
                      }
                    />
                    <Step
                      title={
                        <>
                          <span>Add decision maker</span>&nbsp;
                          <span>#CFO</span>
                        </>
                      }
                      description={
                        <>
                          <div>Kusmmaul</div>
                          <div>March 05</div>
                        </>
                      }
                    />
                    <Step
                      title={
                        <>
                          <span>Delete contact</span>&nbsp;
                          <span>#Restore</span>
                        </>
                      }
                      description={
                        <>
                          <div>Federico Toglietti</div>
                          <div>March 05</div>
                        </>
                      }
                    />
                  </Steps>
                </WindowChanges>
              </ContentTableD>
            </TableD>
            <TableD>
              <ContentTableD>
                <TitleSubTitleCenter>
                  <WrapperTitleSubTitle>
                    <TitleGeneralInto color="#585DE8">Sheldon</TitleGeneralInto>
                    <SubTitleGeneralInto>Update 12/05</SubTitleGeneralInto>
                  </WrapperTitleSubTitle>
                </TitleSubTitleCenter>
              </ContentTableD>
            </TableD>
            <TableD>
              <ContentTableD>
                <WrapperCompany>
                  <TitleSubTitleCenter>
                    <WrapperTitleSubTitle>
                      <TitleGeneralInto color="#6D8492">
                        $00.00
                      </TitleGeneralInto>
                      <SubTitleGeneralInto>1000 users</SubTitleGeneralInto>
                    </WrapperTitleSubTitle>
                  </TitleSubTitleCenter>
                </WrapperCompany>
              </ContentTableD>
            </TableD>
          </tr>
        </tbody>
      </table>
    </WrapperTable>
  );
};

export default connector(TableClients);
