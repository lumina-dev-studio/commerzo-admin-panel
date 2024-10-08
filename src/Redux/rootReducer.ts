import { baseApi } from "./api/baseApi";
import addProductReducer from "./api/Ecommerce/AddProduct/addProductSlice";
import navBarReducer from "./api/NavBar/navBarSlice";
import sideBarReducer from "./api/SideBar/sideBarSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  addProduct: addProductReducer,
  navBar: navBarReducer,
  sideBar: sideBarReducer
};
