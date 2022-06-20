import { createStore } from "redux";
import rootreducers from "./redux/reducers/main";


const store = createStore(
    rootreducers
);

export default store;