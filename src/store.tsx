import { createStore } from "redux";
import { cartReducer } from "./redux/reducers/cartReducer";

const store = createStore(cartReducer);

export default store;
