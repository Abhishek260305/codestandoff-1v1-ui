const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'onevone',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './OneVOne': './src/components/OneVOne',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
};

