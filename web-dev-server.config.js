import { nodeResolve } from '@rollup/plugin-node-resolve';

const hmr = process.argv.includes('--hmr');

export default {
  open: '/app',
  appIndex: './app/index.html',
  rootDir: './',
  watch: !hmr,
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  plugins: [nodeResolve()]
};
