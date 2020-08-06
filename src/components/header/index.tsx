import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CheckoutCart } from '@components';
import { CartActions } from '@store';
import BagIcon from './src/icons/bag.svg';
// import Logo from './src/icons/logo.png';
import './header.scss';

const Header = () => {
  const CartState = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  function toggleCartIsOpen(isOpen: any = null) {
    dispatch(CartActions.toggleCartShow(isOpen ? isOpen : !CartState.isShowingCart));
  }

  return (
    <>
      <nav className="c-header u-flex-column">
        <div className="c-header__top o-container">
          <div className="c-header__title">
            <picture className="o-media">
              {/* <img className="c-header__brand o-media__object o-media__object:50" src={Logo} /> */}
            </picture>
          </div>
          <div>
            <Button classList={['bag']} onClick={() => toggleCartIsOpen()}>
              <div className="u-mr-12">
                <BagIcon />
              </div>
              <span>{CartState.products?.length}</span>
            </Button>
          </div>
        </div>
      </nav>
      <CheckoutCart isOpen={CartState.isShowingCart} toggleFunction={toggleCartIsOpen} />
    </>
  );
};

export default Header;
