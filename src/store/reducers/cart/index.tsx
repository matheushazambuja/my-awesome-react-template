import { CartActions } from '../../actions';

const InitialState = {
  products: [],
  isShowingCart: false,
};

export default function cart(state: any = InitialState, action: any) {
  switch (action.type) {
    case CartActions.Types.ADD:
      let currentProduct = state.products.filter((product: any) => product.id === action.product.id)?.shift();
      let newCartState = state.products.filter((product: any) => product.id !== action.product.id);
      if (currentProduct) {
        action.product.quantity += currentProduct.quantity;
      }
      return {
        ...state,
        products: [...newCartState, action.product],
      };

    case CartActions.Types.REMOVE:
      return {
        ...state,
        products: [...state.products.filter((product: any) => product.id !== action.id)],
      };

    case CartActions.Types.TOGGLE_CART_SHOW:
      return {
        ...state,
        isShowingCart: action.isShowingCart,
      };

    default:
      return state;
  }
}
