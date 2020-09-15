import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, RootReducer);

// const configureStore = (preloadedState = {}) => {
//   let store = createStore(
//     persistedReducer,
//     preloadedState,
//     applyMiddleware(thunk, logger)
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
export default configureStore;