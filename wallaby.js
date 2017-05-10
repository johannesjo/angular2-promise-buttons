'use strict';

const wallabyWebpack = require('wallaby-webpack');
const path = require('path');

const compilerOptions = Object.assign(
  require('./tsconfig.json').compilerOptions);

// don't generate the declaration files (.d.ts)
compilerOptions.declaration = false;

module.exports = function (wallaby) {

  const webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
      'scripts/wallabyTest.js',
      'src/**/*spec.js'
    ],

    module: {
      loaders: [
        { test: /\.css$/, loader: 'raw-loader' },
        { test: /\.html$/, loader: 'raw-loader' },
        { test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/ },
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.styl$/, loaders: ['raw-loader', 'stylus-loader'] },
        { test: /\.less$/, loaders: ['raw-loader', 'less-loader'] },
        { test: /\.scss$|\.sass$/, loaders: ['raw-loader', 'sass-loader'] },
        { test: /\.(jpg|png)$/, loader: 'url-loader?limit=128000' }
      ]
    },

    resolve: {
      modules: [
        path.join(wallaby.projectCacheDir, 'demo/src'),
        path.join(wallaby.projectCacheDir, 'src')
      ]
    }
  });

  return {
    files: [
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'src/**/*.d.ts', ignore: true },
      { pattern: 'src/**/*.css', load: false },
      { pattern: 'src/**/*.less', load: false },
      { pattern: 'src/**/*.scss', load: false },
      { pattern: 'src/**/*.sass', load: false },
      { pattern: 'src/**/*.styl', load: false },
      { pattern: 'src/**/*.html', load: false },
      { pattern: 'src/**/*.json', load: false },
      { pattern: 'scripts/*.ts', load: false },
      { pattern: 'src/**/*spec.ts', ignore: true },
      { pattern: 'demo/src/**/*.ts', load: false },
      { pattern: 'demo/src/**/*.d.ts', ignore: true },
      { pattern: 'demo/src/**/*.css', load: false },
      { pattern: 'demo/src/**/*.less', load: false },
      { pattern: 'demo/src/**/*.scss', load: false },
      { pattern: 'demo/src/**/*.sass', load: false },
      { pattern: 'demo/src/**/*.styl', load: false },
      { pattern: 'demo/src/**/*.html', load: false },
      { pattern: 'demo/src/**/*.json', load: false },
      { pattern: 'demo/src/**/*spec.ts', ignore: true }
    ],

    tests: [
      { pattern: 'src/**/*spec.ts', load: false }
    ],

    testFramework: 'jasmine',
    preprocessors: {
      './scripts/test.ts': ['@angular/cli']
    },
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },

    env: {
      kind: 'electron'
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
