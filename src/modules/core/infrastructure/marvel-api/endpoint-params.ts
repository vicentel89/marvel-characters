export interface BaseEndpointParams {
  [key: string]: string | number | undefined;
  limit?: number;
  offset?: number;
}
