import { createStore } from 'redux';
import reducer from './reducers';
import { CartActions } from './actions';

const store = createStore(reducer);

export default store;
export { CartActions };
