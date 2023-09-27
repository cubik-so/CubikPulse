import type { RedisOptions } from 'ioredis';
import { Redis } from 'ioredis';

export const createRedisInstance = (options: RedisOptions): Redis => {
  return new Redis(options);
};
