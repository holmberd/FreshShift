import React from 'react';
import { navigate } from 'gatsby';

import Container from '@material-ui/core/Container';

import Layout from '../components/layout';
import classes from './main.module.scss';

function Main() {
  return (
    <>
      <Layout>
        <div className={classes.root}>

          <section className={classes.demo}>
            <Container maxWidth='lg'>
              <div>test</div>
            </Container>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Main;
