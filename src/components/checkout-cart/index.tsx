import React from 'react';
import Swal from 'sweetalert2';
import { Button, Column } from '@components';
import { useSelector, useDispatch } from 'react-redux';
import { CartActions } from '@store';

import './checkout-cart.scss';

const ComponentClass: string = 'c-checkout-cart';

const CheckoutCart = ({ isOpen, toggleFunction }: CheckoutCartProps) => {
  const CartStateProducts = useSelector((state: any) => state.cart.products);
  const dispatch = useDispatch();

  const removeItemFromCart = (product: any) => {
    Swal.fire({
      title: `Deseja remover o produto ${product.title} do carrinho?`,
      confirmButtonText: 'Sim, remover',
      cancelButtonText: 'Cancelar',
      icon: 'warning',
      backdrop: true,
      showCancelButton: true,
    }).then((result: any) => {
      if (result.value) {
        dispatch(CartActions.removeProductFromCart(product.id));
        Swal.fire({
          title: 'Produto removido do carrinho!',
          icon: 'info',
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          position: 'top-right',
        });
      }
    });
  };

  return (
    <>
      <aside className={`${ComponentClass} ${isOpen ? 'is-open' : ''} u-pd-32`}>
        <div className="o-row">
          <Column sizes={{ xs: 12 }} classList={['u-mb-24 u-items-center u-flex u-justify-between u-flex-row-reverse']}>
            <h3>Seu carrinho</h3>
            <Button
              classList={['close']}
              className={'u-color-black'}
              onClick={() => {
                toggleFunction();
              }}
            >
              <i className="lni lni-chevron-left u-fs-18"></i>
            </Button>
          </Column>
        </div>
        <ul className={`${ComponentClass}__list o-list`}>
          {CartStateProducts && CartStateProducts.length > 0 ? (
            CartStateProducts.map((product: any) => (
              <li key={product.id}>
                <div className="o-row u-items-center">
                  <Column sizes={{ xs: 10 }}>
                    <span className="u-fs-14 u-fw-600">
                      ({product.quantity} {product.quantity === 1 ? 'unidade' : 'unidades'}) - {product.title}
                    </span>
                  </Column>
                  <Column sizes={{ xs: 2 }}>
                    <div className="u-tr">
                      <Button classList={['black-circle']} onClick={() => removeItemFromCart(product)}>
                        <i className="lni lni-close"></i>
                      </Button>
                    </div>
                  </Column>
                </div>
              </li>
            ))
          ) : (
            <div className="o-row">
              <Column sizes={{ xs: 12 }}>
                <span>Sem produtos no seu carrinho.</span>
              </Column>
            </div>
          )}
        </ul>
      </aside>
      <div
        className={'o-backdrop'}
        onClick={() => {
          toggleFunction();
        }}
      ></div>
    </>
  );
};

export interface CheckoutCartProps {
  isOpen: boolean;
  toggleFunction: Function;
}

export default CheckoutCart;

export { CheckoutCart };
