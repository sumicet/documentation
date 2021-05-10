import path from 'path';
import { Command } from 'commander';
import { serve } from '@jdocs/local-api';

const isProduction = process.env.NODE_ENV === 'production';

export const serveCommand = new Command()
    .command('serve [filename]')
    .description('open a file for editing')
    .option('-p, --port <number>', 'port to run server on', '4005')
    .action(async (filename = 'notebook.js', options: { port: string }) => {
        try {
            const dir = path.join(process.cwd(), path.dirname(filename));

            // won't use proxy in production mode
            await serve(
                parseInt(options.port),
                path.basename(filename),
                dir,
                !isProduction
            );
            console.log(
                `Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file.`
            );
        } catch (err) {
            if (err.code === 'EADDRINUSE') {
                console.log(
                    'Port already in use. Try running on a different port.'
                );
            } else {
                console.log(err.message);
            }
            process.exit(1);
        }
    });
