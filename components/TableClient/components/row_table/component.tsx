import React from "react";

import { ClientsData } from "../../type";

import {
  SuperBadgeItem,
  ContentTags,
  WrapperSimilars,
  TableD,
  ContentTableD,
} from "../../styled";

import {
  CheckboxStandard,
  TitleSubTitle,
  SimpleProfile,
  CirclePlusBadge,
  PictureGeneral,
  WindowGeneral,
} from "../";

import RickProfile from "@assets/rick.jpg";

interface Props extends ClientsData {
  anyx?: undefined;
}

const RowTable: React.FunctionComponent<Props> = (props) => {
  let interests = props.interests.join("; ");
  interests =
    interests.length > 42 ? interests.substr(0, 42) + " ..." : interests;
  return (
    <>
      <TableD>
        <ContentTableD>
          <CheckboxStandard size={20} />
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <TitleSubTitle
            title={props.companyName}
            colorSubTitle="#0144bf"
            link={props.companySite}
            subTitle={props.companySite}
            textCenter={true}
          />
          <WindowGeneral>
            <div className="wrap-more-info">
              <div className="line-info">
                <span>Company:</span>
                &nbsp;
                <span>{props.companyName}</span>
              </div>
              <div className="line-info">
                <span>Country:</span>
                &nbsp;
                <span>{props.country}</span>
              </div>
              <div className="line-info">
                <span>Site:</span>
                &nbsp;
                <span>
                  <a href={props.companySite}>{props.companySite}</a>
                </span>
              </div>
              <div className="line-info">
                <span>Linkedin:</span>
                &nbsp;
                <span>
                  <a href={props.companyLinkedin}>Go to LinkedIn</a>
                </span>
              </div>
              <div className="line-info">
                <span>Size:</span>
                &nbsp;
                <span>{props.companySize}</span>
              </div>
              <div className="line-info">
                <span>Sector:</span>
                &nbsp;
                <span>{props.companySector}</span>
              </div>
              <div className="line-info">
                <span>Products:</span>
                &nbsp;
                <span>{props.companyProducts}</span>
              </div>
              <div className="line-info">
                <span>Similars:</span>
                &nbsp;
                <span></span>
              </div>
              <div className="line-info">
                <span>Account:</span>
                &nbsp;
                <span></span>
              </div>
            </div>
          </WindowGeneral>
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <SimpleProfile
            src={RickProfile}
            alt="Decision Market"
            toolTitle="Decision Market"
            title={`${props.name} ${props.lastName}`}
            subTitle={`${props.area} ${props.position}`}
          />
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <ContentTags>
            <span>{interests}</span>
          </ContentTags>
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <CirclePlusBadge
            items={[
              {
                text: "AP",
                color: "#FF6B81",
                background: "#E80D0D19",
                isBadge: true,
                colorBadge: "#FF6B81",
              },
              {
                text: "IN",
                color: "#C7C241",
                background: "#FAC10536",
                isBadge: true,
                colorBadge: "#88E278",
              },
              {
                text: "QU",
                color: "#60C741",
                background: "#50B72236",
                isBadge: true,
                colorBadge: "#88E278",
              },
              {
                text: "DE",
                color: "#414BC7",
                background: "#1C3DC636",
                isBadge: true,
                colorBadge: "#88E278",
              },
            ]}
          />
        </ContentTableD>
      </TableD>
      <TableD>
        <ContentTableD>
          <WrapperSimilars>
            <PictureGeneral
              src={RickProfile}
              alt="Similar"
              toolTitle="Similar"
            />
            <PictureGeneral
              src={RickProfile}
              alt="Similar"
              toolTitle="Similar"
            />
            <PictureGeneral
              src={RickProfile}
              alt="Similar"
              toolTitle="Similar"
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
    </>
  );
};

export default RowTable;
