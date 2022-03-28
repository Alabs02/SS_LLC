import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

// REDUCERS
import shipment from "./slices/shipment";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    shipment
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
