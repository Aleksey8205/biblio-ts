import * as dotenv from 'dotenv';
dotenv.config();

export interface ConfigType {
  PORT?: string | undefined;
  login?: string | undefined;
  mail?: string | undefined;
}

const config: ConfigType = {
  PORT: process.env.PORT,
  login: process.env.login,
  mail: process.env.mail,
};

export default config;