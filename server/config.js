const hmr = process.argv.includes('--hmr');

export default {
  appIndex: './app/index.html',
  rootDir: './app',
  watch: !hmr,
  nodeResolve: true
};
