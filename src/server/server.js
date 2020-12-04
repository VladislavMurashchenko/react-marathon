import fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import path from 'path';
import handlebars from 'handlebars';
import Hapi from '@hapi/hapi';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { setPath } from 'hookrouter';
import App from '../App';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  // eslint-disable-next-line global-require
  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) =>
      h.file(path.join(process.cwd(), 'dist', 'main.js')),
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request, h) => {
      const pathIndexHTML = path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(
        fs.readFileSync(pathIndexHTML, 'utf8'),
      );

      setPath(request.path);

      return template({
        content: ReactDOMServer.renderToString(React.createElement(App)),
      });
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
