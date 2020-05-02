import React from "react";

import { OpenGraphModel } from "../../type";
import {
  WrapOpenGraphShow,
  OpenGraphShow,
  LoadingOpenGraph,
  IconSpinLoadingOPG,
  ImageWebOPG,
  WrapDescriptionOPG,
  TitleWebOPG,
  DescriptionWebOPG,
  UrlWebOPG,
  DataNoFound,
} from "../styled";

interface Props extends OpenGraphModel {
  LoadIcon: string;
  defaultImage: string;
}

const ShowOpenGraph: React.FunctionComponent<Props> = (props) => {
  const [image, setImage] = React.useState(false);

  React.useEffect(() => {
    const verify = new Image();
    verify.onabort = verify.onerror = () => {
      setImage(false);
    };
    verify.onload = () => {
      setImage(true);
    };
    verify.src = props.image || "";
  }, [props.image]);

  return (
    <WrapOpenGraphShow>
      <OpenGraphShow>
        {props.isLoading ? (
          <LoadingOpenGraph>
            <IconSpinLoadingOPG src={props.LoadIcon} />
          </LoadingOpenGraph>
        ) : !props.nodata ? (
          <>
            <ImageWebOPG src={image ? props.image : props.defaultImage} />
            <WrapDescriptionOPG>
              <TitleWebOPG>{props.title || ""}</TitleWebOPG>
              <DescriptionWebOPG>{props.desc || ""}</DescriptionWebOPG>
              <UrlWebOPG>{props.url || ""}</UrlWebOPG>
            </WrapDescriptionOPG>
          </>
        ) : (
          <DataNoFound>
            <span>data no found</span>
          </DataNoFound>
        )}
      </OpenGraphShow>
    </WrapOpenGraphShow>
  );
};

export default ShowOpenGraph;
