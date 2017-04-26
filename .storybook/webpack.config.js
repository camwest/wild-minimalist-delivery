module.exports = function(storybookBaseConfig, configType) {
  let ourConfig;

  if (configType === 'DEVELOPMENT') {
    ourConfig = require('react-scripts-ts/config/webpack.config.dev');
  } else {
    ourConfig = require('react-scripts-ts/config/webpack.config.prod');
  }

  const newConfig = Object.assign(ourConfig, {
    resolve: Object.assign(ourConfig.resolve, {
      alias: Object.assign(
        ourConfig.resolve.alias,
        storybookBaseConfig.resolve.alias
      )
    }),
    entry: storybookBaseConfig.entry,
    output: storybookBaseConfig.output,
    module: Object.assign(ourConfig.module, {
      loaders: [
        ...storybookBaseConfig.module.loaders,
        ...ourConfig.module.loaders
      ]
    })
  });

  return newConfig;
};
