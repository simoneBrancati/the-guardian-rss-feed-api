import Redis from "ioredis";
import { redisHost, redisPort } from "../environment";

let client: Redis;

export const setString = async (
  key: string,
  value: string,
): Promise<boolean> => {
  const client = getClient();
  const response = await client.set(key, value);

  return response === "OK";
};

export const getString = async (key: string): Promise<string | null> => {
  const client = getClient();
  return client.get(key);
};

const getClient = (): Redis => {
  if (!client) {
    client = createClient();
  }

  return client;
};

const createClient = (): Redis => {
  return new Redis({
    host: redisHost,
    port: redisPort,
  });
};
