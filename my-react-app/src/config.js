const ENV = process.env.REACT_APP_ENV || 'production';

const configs = {
  production: {
    environment: 'production',
    featureFlag: false,
  },
  staging: {
    environment: 'staging',
    featureFlag: true,

  },
};

const config = configs[ENV];
export default config;
