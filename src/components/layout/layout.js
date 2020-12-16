import React from 'react';
import PropTypes from "prop-types";
import Header from './header';

import classes from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className={classes.site}>
        <Header />
        <main className={classes.content} role='main'>
          {children}
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array,
};

Layout.defaultProps = {
  title: '',
  description: '',
  keywords: [],
};

export default Layout;