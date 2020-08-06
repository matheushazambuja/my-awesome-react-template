import { CartTypes } from './types';

const addProductOnCart = (product: any) => {
  return {
    type: CartTypes.ADD,
    product,
  };
};

const removeProductFromCart = (id: any) => {
  return {
    type: CartTypes.REMOVE,
    id,
  };
};

const updateProductOnCart = (id: any, quantity: number) => {
  return {
    type: CartTypes.UPDATE,
    id,
    quantity,
  };
};

const toggleCartShow = (isShowingCart: boolean) => {
  return {
    type: CartTypes.TOGGLE_CART_SHOW,
    isShowingCart,
  };
};

export default { addProductOnCart, removeProductFromCart, updateProductOnCart, toggleCartShow, Types: CartTypes };
