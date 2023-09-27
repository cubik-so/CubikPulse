import Redis, { RedisOptions } from 'ioredis';

export const createRedisInstance = (options: RedisOptions) => {
  return new Redis(options);
};
