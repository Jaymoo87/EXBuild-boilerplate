import * as esbuild from 'esbuild';

let ctx;

try {
  ctx = await esbuild.context({
    entryPoints: ['src/server/server.ts'],
    bundle: true,
    sourcemap: true,
    minify: false,
    platform: 'node',
    target: ['node18.12'],
    packages: 'external',
    outfile: 'dist/server.js',
  });

  await ctx.watch();
} catch (error) {
  console.error('an error occurred:', error);
  process.exit(1);
}
