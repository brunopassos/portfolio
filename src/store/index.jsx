import { legacy_createStore as createstore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import menuListReducer from "./modules/MenuList/reducer";


const reducers = combineReducers({
    menuList: menuListReducer,
})

const store = createstore(reducers);

export default store;