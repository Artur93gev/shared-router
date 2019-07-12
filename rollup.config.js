import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: {
    index: './src/index.js',
  },
  output: [
    {
      dir: 'build',
      format: 'esm',
      entryFileNames: '[name].js',
      exports: 'named',
    },
  ],
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: [
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-syntax-jsx',
      ],
    }),
    resolve(),
    external(),
    commonjs({
      namedExports: {
        'react': ['Component', 'memo'],
        'react-is': ['isValidElementType'],
        'react-router-dom': ['Router'],
        'history': ['createBrowserHistory'],
      }
    }),
  ],
};
