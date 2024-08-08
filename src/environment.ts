export const appPort = process.env.APP_PORT!;

export const redisHost = process.env.REDIS_HOST!;

export const redisPort = parseInt(process.env.REDIS_PORT!);

export const cacheTTLInSeconds = parseInt(process.env.CACHE_TTL!);

export const theGuardianApiKey = process.env.THE_GUARDIAN_API_KEY!;

export const theGuardianEndpoint = process.env.THE_GUARDIAN_SECTION_ENDPOINT!;

export const debugMode = !!parseInt(process.env.DEBUG_MODE!);
