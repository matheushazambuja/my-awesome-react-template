import React from 'react';
// import LogoFooter from './src/assets/logo-footer.png';
import { Column } from '@components';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="o-container">
        <div className="o-row">
          <Column classList={['u-color-white u-mb-24']} sizes={{ xs: 12, sm: 3, md: 3 }}>
            <picture className="o-brand u-justify-center">{/* <img src={LogoFooter} /> */}</picture>
          </Column>
          <Column classList={['u-color-white u-mt-16 u-mt-0@sm']} sizes={{ xs: 12, sm: 3, md: 3 }}>
            <h3 className="u-mb-8">Footer 1</h3>
            <ul className={'o-list'}>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </Column>
          <Column classList={['u-color-white u-mt-16 u-mt-0@sm']} sizes={{ xs: 12, sm: 3, md: 3 }}>
            <h3 className="u-mb-8">Footer 2</h3>
            <ul className={'o-list'}>
              <li>
                <a href="#">Link 1</a>
              </li>
            </ul>
          </Column>
          <Column classList={['u-color-white u-mt-16 u-mt-0@sm']} sizes={{ xs: 12, sm: 3, md: 3 }}>
            <h3 className="u-mb-8">Footer 3</h3>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
          </Column>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
