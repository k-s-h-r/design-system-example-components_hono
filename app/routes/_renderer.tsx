import { reactRenderer, useRequestContext } from '@hono/react-renderer';
import { Style } from 'hono/css';
import { Link, Script } from 'honox/server';
import type { FC, PropsWithChildren } from 'react';

const HasIslands: FC<PropsWithChildren> = ({ children }) => {
  const IMPORTING_ISLANDS_ID = '__importing_islands' as const;
  const c = useRequestContext();
  return <>{c.get(IMPORTING_ISLANDS_ID) ? children : <></>}</>;
};

export default reactRenderer(({ children, title }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {import.meta.env.PROD ? (
          <>
            <HasIslands>
              <script type='module' src='/static/client.js'></script>
            </HasIslands>
            <link href='/static/assets/globals.css' rel='stylesheet' />
          </>
        ) : (
          <>
            <script type='module' src='/app/client.ts'></script>
            <link href='/app/globals.css' rel='stylesheet' />
          </>
        )}
        {title ? <title>{title}</title> : ''}
      </head>
      <body>{children}</body>
    </html>
  );
});
