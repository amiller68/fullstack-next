import Page from '../Page';
import React from 'react';
import styles from './PrimaryLayout.module.css';
/* something is wrong here: content centered within container
but container itself is not centered, so defaults to left-align 
+ content shifts up as more is added
 */
export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = (props: IPrimaryLayout) => {
  return (
    <>
      <Page
        title={'Fullstack Vercel'}
        description={'Template for Fullstack Vercel'}
        url={'krondor.org'}
      >
        <div className={`min-h-screen flex flex-col ${props.justify}`}> 
          <main className={styles.main}>{props.children}</main>
          <div className="m-auto" />
        </div>
      </Page>
    </>
  );
};

export default PrimaryLayout;
