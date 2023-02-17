const hmr = process.argv.includes('--hmr');

export default {
  open: '/',
  appIndex: './../app/index.html',
  rootDir: './app',
  watch: !hmr,
  nodeResolve: true
};
