import { orkesConductorClient } from "@io-orkes/conductor-javascript";

export const config = {
  serverUrl: `${process.env.SERVER_URL}`,
};

(async () => {
  const clientPromise = orkesConductorClient(config);
  const client = await clientPromise;
})(console.log("hello world"));
