import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

let service: esbuild.Service;

const bundle = async (rawCode: string) => {
    // init esbuild
    if (!service) {
        service = await esbuild.startService({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
        });
    }

    try {
        // run the bundler + transpile
        const result = await service.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window',
            },
            jsxFactory: '_React.createElement',
            jsxFragment: '_React.Fragment',
        });

        // send result back
        return {
            code: result.outputFiles[0].text,
            err: '',
        };
    } catch (err) {
        return {
            code: '',
            err: err.message,
        };
    }
};

export default bundle;
