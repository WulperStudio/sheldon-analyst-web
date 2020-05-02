/**
 * Open Graph
 */

export const SUBMIT_OPEN_GRAPH = "SUBMIT_OPEN_GRAPH";
export const SUCCESS_OPEN_GRAPH = "SUCCESS_OPEN_GRAPH";
export const FAIL_OPEN_GRAPH = "FAIL_OPEN_GRAPH";

export interface OpenGraphModel {
  image: string | undefined;
  title: string | undefined;
  desc: string | undefined;
  url: string;
  isLoading: boolean;
  nodata: boolean;
}

export interface ServiceOpenGraph {
  og_title: string;
  og_desc: string;
  og_url: string;
  og_image: string;
}

interface EventSubmitOpG {
  type: typeof SUBMIT_OPEN_GRAPH;
}

interface EventSuccessOpG {
  type: typeof SUCCESS_OPEN_GRAPH;
  payload: OpenGraphModel;
}

interface EventFailOpG {
  type: typeof FAIL_OPEN_GRAPH;
}

/**
 * General Status
 */

export type ActionFormClient = EventSubmitOpG | EventSuccessOpG | EventFailOpG;

export interface StatusFormClient {
  opg: OpenGraphModel;
}

export type AttributeResponse = {
  data: ServiceOpenGraph;
};

export interface RxStatusFormClient {
  FormClientReducer: StatusFormClient;
}
