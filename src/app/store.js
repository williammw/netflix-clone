import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
// import userReducer from '../features/UserSlice'
// import odataReducer from '../features/OdataSlice'
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer,  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  counter: counterReducer,
  // user: userReducer,
  // odata:odataReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk]
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export default store;