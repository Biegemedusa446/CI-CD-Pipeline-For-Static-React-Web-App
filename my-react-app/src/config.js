const ENV = process.env.REACT_APP_ENV || 'staging';

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

const config = 'staging';
export default config;
