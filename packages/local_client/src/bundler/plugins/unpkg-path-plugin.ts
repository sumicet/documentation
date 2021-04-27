import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
    return {
        name: 'unpkg-path-plugin',
        setup(build: esbuild.PluginBuild) {
            // handle path to index.js
            build.onResolve({ filter: /(^index\.js$)/ }, () => {
                return { path: 'index.js', namespace: 'a' };
            });

            // handle path to a child module
            build.onResolve({ filter: /^\.+\// }, async (args: any) => {
                return {
                    namespace: 'a',
                    path: new URL(
                        args.path,
                        'https://unpkg.com' + args.resolveDir + '/'
                    ).href,
                };
            });

            // handle path to a main file
            build.onResolve({ filter: /.*/ }, async (args: any) => {
                return {
                    namespace: 'a',
                    path: `https://unpkg.com/${args.path}`,
                };
            });
        },
    };
};
