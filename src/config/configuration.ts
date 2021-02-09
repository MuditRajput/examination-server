import * as dotenv from 'dotenv';

const envVars = dotenv.config().parsed;
const config: IConfig = {
    port: envVars.port,
    nodeEnv: envVars.node_env,
    secretKey: envVars.secret_key,
    mongoUrl: envVars.MONGO_URL
};
Object.freeze(config);
export default config;
