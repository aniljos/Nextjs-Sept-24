import {configureStore, combineReducers, } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { gadgetReducer } from "./gadgetsReducer";

const combinedReducers = combineReducers({
    auth: authReducer,
    gadgets: gadgetReducer
})

//store
export const store = configureStore({
    reducer: combinedReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;