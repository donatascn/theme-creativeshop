import path from 'path';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';
import moduleImporter from 'sass-module-importer';

import paths from '../../paths';

/**
 * Settings for styles compilation.
 */
const config = {
  watch: [path.join(paths.src, '**/*.{css,scss,sass}')],
  src: path.join(paths.src, '**/*.{css,scss,sass}'),
  dest: path.join(paths.dist, 'web/'),
  postcss: [
    flexbugs(),
    autoprefixer({
      browsers: ['IE>=10', '>1%', 'last 2 versions'],
    }),
  ],
  cleanCSS: {},
  sass: {
    precision: 10,
    errLogToConsole: true,
    includePaths: [path.resolve('src')],
    importer: moduleImporter,
  },
};

export default config;
