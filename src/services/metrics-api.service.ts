import SDK from "@zeitgeistpm/sdk";

const ZEITGEIST_RPC_URL = "wss://zeitgeist-rpc.dwellir.com/";
const ZEITGEIST_GQL_URL = "https://processor.zeitgeist.pm/graphql";
const ZEITGEIST_SUBSCAN_URL = "https://zeitgeist.api.subscan.io/";
const ZEITGEIST_API_URL = "https://api.zeitgeist.pm/";

const fetchMarketCount = async (): Promise<number> => {
  const sdk = await SDK.initialize(ZEITGEIST_RPC_URL);

  const res = await sdk.models.getMarketCount();
  return res;
};

const fetchTVL = async (): Promise<number> => {
  const sdk = await SDK.initialize(ZEITGEIST_RPC_URL);

  const res = await sdk.models.getMarketCount();
  return res;
};

const fetchAddressCount = (): Promise<number> =>
  fetch(`${ZEITGEIST_API_URL}/api/v1/token/holders`)
    .then((response: Response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      return 0;
    });

export const MetricsApi = {
  fetchMarketCount,
  fetchTVL,
  fetchAddressCount,
};
