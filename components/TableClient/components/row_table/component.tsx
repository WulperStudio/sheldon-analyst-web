import React from "react";
import { Steps } from "antd";

import { ClientsData } from "../../type";

import {
  SuperBadgeItem,
  ContentTags,
  WrapperSimilars,
  TableD,
  ContentTableD,
} from "../../styled";

import {
  IconRoundBorder,
  TimeLineStatus,
  TimeLineSubTitle,
  WindowLineInfo,
  TitleTags,
  ListTags,
} from "./styled";

import {
  CheckboxStandard,
  TitleSubTitle,
  SimpleProfile,
  PictureGeneral,
  WindowGeneral,
} from "../";

import RickProfile from "@assets/rick.jpg";
import * as Ellipsis from "@assets/ellipsis.svg";
import * as Icon3 from "@assets/icon-3.svg";
import * as IconOk from "@assets/ok_icon.svg";

interface Props extends ClientsData {
  anyx?: undefined;
}

const { Step } = Steps;

const RowTable: React.FunctionComponent<Props> = (props) => {
  const interestsRaw = props.interests.join("; ");
  const interests =
    interestsRaw.length > 42
      ? interestsRaw.substr(0, 42) + " ..."
      : interestsRaw;
  return (
    <>
      <TableD>
        <ContentTableD>
          <CheckboxStandard size={20} />
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD justify="flex-start">
          <IconRoundBorder>
            <img src={Icon3} />
          </IconRoundBorder>
          <TitleSubTitle
            title={props.companyName}
            colorSubTitle="#0144bf"
            link={props.companySite}
            subTitle={props.companySite}
          />
          <WindowGeneral>
            <div>
              <WindowLineInfo>
                <span>Company</span>
                <span>{props.companyName}</span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Country</span>
                <span>{props.country}</span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Site</span>
                <span>
                  <a href={props.companySite}>{props.companySite}</a>
                </span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Linkedin</span>
                <span>
                  <a href={props.companyLinkedin}>Go to LinkedIn</a>
                </span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Size</span>
                <span>{props.companySize}</span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Sector</span>
                <span>{props.companySector}</span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Account</span>
                <span></span>
              </WindowLineInfo>
            </div>
          </WindowGeneral>
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD justify="flex-start">
          <SimpleProfile
            src={RickProfile}
            alt="Decision Market"
            toolTitle="Decision Market"
            title={`${props.name} ${props.lastName}`}
            subTitle={`${props.area} ${props.position}`}
          />
          <WindowGeneral>
            <div>
              <WindowLineInfo>
                <span>Name:</span>
                <span>{`${props.name} ${props.lastName}`}</span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Position:</span>
                <span>{`${props.area} ${props.position}`}</span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Linkedin:</span>
                <span>
                  <a href={props.linkedinUrl}>Go to LinkedIn</a>
                </span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Birthday:</span>
                <span>{props.birthday}</span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Age:</span>
                <span></span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>Sex:</span>
                <span>{props.sex}</span>
              </WindowLineInfo>
              <WindowLineInfo>
                <span>NSE:</span>
                <span>{props.nse}</span>
              </WindowLineInfo>
            </div>
          </WindowGeneral>
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <ContentTags>
            <span>{interests}</span>
          </ContentTags>
          <WindowGeneral>
            <div>
              <TitleTags>Tags</TitleTags>
              <ListTags>{interestsRaw}</ListTags>
            </div>
          </WindowGeneral>
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <div>
            <TimeLineStatus pending={props.verified}>
              {props.verified ? (
                <span>Validated</span>
              ) : (
                <span>Need validation</span>
              )}
            </TimeLineStatus>
            <TimeLineSubTitle>108 updates</TimeLineSubTitle>
          </div>
          <WindowGeneral light={true} width={311}>
            <Steps
              className="timeline-sheet"
              progressDot
              current={0}
              direction="vertical"
            >
              <Step
                className="check"
                title={
                  <>
                    <div className="title-timeline-sheet">
                      Pending validation
                    </div>
                  </>
                }
                description={
                  <>
                    <div className="desc-timeline-sheet">
                      Analyst - fdiaz@imsheldon.com
                    </div>
                    <div className="date-timeline-sheet">March 05</div>
                  </>
                }
              />
              <Step
                className="check"
                title={
                  <div className="title-timeline-sheet">
                    Change phone &nbsp;
                    <span className="link">+54 341 6758 9285</span>
                  </div>
                }
                description={
                  <>
                    <div className="desc-timeline-sheet">
                      Analyst - fdiaz@imsheldon.com
                    </div>
                    <div className="date-timeline-sheet">March 05</div>
                  </>
                }
              />
              <Step
                title={
                  <div className="title-timeline-sheet">
                    Add decision maker &nbsp;
                    <span className="link">#CFO</span>
                  </div>
                }
                description={
                  <>
                    <div className="desc-timeline-sheet">
                      User - facundo@proglobal.com
                    </div>
                    <div className="date-timeline-sheet">March 05</div>
                  </>
                }
                icon={<img src={IconOk} alt="" />}
              />
              <Step
                title={
                  <div className="title-timeline-sheet">
                    Delete contact &nbsp;
                    <span className="link">#Restore</span>
                  </div>
                }
                description={
                  <>
                    <div className="desc-timeline-sheet">
                      Analyst - fdiaz@imsheldon.com
                    </div>
                    <div className="date-timeline-sheet">March 05</div>
                  </>
                }
              />
            </Steps>
          </WindowGeneral>
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <WrapperSimilars>
            <PictureGeneral
              src={RickProfile}
              alt="Similar"
              toolTitle="Similar"
              size="medium"
            />
            <PictureGeneral
              src={RickProfile}
              alt="Similar"
              toolTitle="Similar"
              size="medium"
            />
            <PictureGeneral
              src={RickProfile}
              alt="Similar"
              toolTitle="Similar"
              size="medium"
            />
            <SuperBadgeItem>+429</SuperBadgeItem>
          </WrapperSimilars>
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <TitleSubTitle
            title="Sheldon"
            color="#0144bf"
            subTitle="Update 12/05"
            textCenter={true}
          />
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <TitleSubTitle
            title="$00.00"
            color="#6D8492"
            subTitle="1000 users"
            textCenter={true}
          />
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <img src={Ellipsis} />
        </ContentTableD>
      </TableD>
      <TableD style={{ width: "100%" }}></TableD>
    </>
  );
};

export default RowTable;
