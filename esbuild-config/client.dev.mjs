import * as esbuild from 'esbuild';
import * as sass from 'sass';
import { sassPlugin } from 'esbuild-sass-plugin';

let ctx;

try {
  ctx = await esbuild.context({
    entryPoints: ['src/client/index.tsx'],
    bundle: true,
    minify: false,
    sourcemap: true,
    outfile: 'public/static/bundle.js',
    plugins: [sassPlugin({ type: 'style', quietDeps: true, logger: sass.Logger.silent })],
    define: {
      'process.env.NODE_ENV': process.env.NODE_ENV ? process.env.NODE_ENV : "'development'",
    },
  });

  await ctx.watch();
  console.log('Watching client....');

  const { host, port } = await ctx.serve({
    servedir: 'public',
    fallback: 'index.html',
  });

  console.log(`Hot refresh at http://${host}:${port}`);
} catch (error) {
  console.error('an error occurred', error);
  process.exit(1);
}
