import React from 'react';
import Container from '@material-ui/core/Container';

import Layout from '../components/page-layout';
import DemoApp from '../components/demo-app';

import classes from './main.module.scss';

function Main() {
  return (
    <>
      <Layout>
        <div className={classes.root}>
            <div className={classes.demoContainer}>
              <Container maxWidth='lg'>
                <DemoApp/>
              </Container>
            </div>
          </div>
      </Layout>
    </>
  );
}



export default Main;
