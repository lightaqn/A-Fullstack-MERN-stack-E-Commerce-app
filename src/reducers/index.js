import authReducer from './auth.reducers';
import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import productReducer from './product.reducer';
import categoryReducer from './category.reducer';
import orderReducer from './order.reducer';
import pageReducer from './page.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    order: orderReducer,
    page: pageReducer
});

export default rootReducer;
