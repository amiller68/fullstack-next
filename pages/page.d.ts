import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

// A custom NextPage type that allows for routing different layouts
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
