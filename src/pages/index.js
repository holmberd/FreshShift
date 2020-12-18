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
      <img src='./gmail.jpg' style={{display: 'none'}} />
      <img src='./freshprincestore.jpg' style={{display: 'none'}} />
      <img src='./google.jpg' style={{display: 'none'}} />
      <img src='./slack.jpg' style={{display: 'none'}} />
      <img src='./tryshift.jpg' style={{display: 'none'}} />
    </>
  );
}



export default Main;
