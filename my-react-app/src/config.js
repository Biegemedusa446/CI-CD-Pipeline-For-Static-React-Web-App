const ENV = process.env.REACT_APP_ENV || 'staging';

const configs = {
  production: {
    environment: 'production',
    featureFlag: true,
  },
  staging: {
    environment: 'staging',
    featureFlag: false,

  },
};

const config = configs[ENV];
export default config;
