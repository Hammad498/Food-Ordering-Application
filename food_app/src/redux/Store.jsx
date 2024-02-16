import {configureStore} from "@reduxjs/toolkit";
import Cartslices from "./slices/Cartslices";
import Categoryslice from "./slices/Categoryslice";
import Searchslice from "./slices/Searchslice";

const Store=configureStore({
    reducer:{
        cart:Cartslices,
        category :  Categoryslice,
        search : Searchslice,
    }
}
);

export default Store;