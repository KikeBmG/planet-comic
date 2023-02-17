import { nodeResolve } from '@rollup/plugin-node-resolve';

const hmr = process.argv.includes('--hmr');

export default {
  open: '/app',
  watch: !hmr,
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  appIndex: './app/index.html',
  plugins: [nodeResolve()]
};
