import React from 'react';
import Head from 'next/head';

export interface IPage extends React.ComponentPropsWithoutRef<'head'> {
  title: string;
  description: string;
  url: string;
}

export const Page: React.FC<IPage> = (props: IPage) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
        <link
          rel="icon"
          type="image/ico"
          sizes="32x32"
          href="/static/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="16x16"
          href="/static/favicon-16x16.ico"
        />

        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      {props.children}
    </div>
  );
};

export default Page;
