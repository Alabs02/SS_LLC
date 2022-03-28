import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../rootReducer';

// Define a type for the slice state
interface ShipmentState {
    status: string,
    data: []
}

// Define the initial state using that type
const initialState: ShipmentState = {
    status: "loading",
    data: []
}

export const shipmentSlice = createSlice({
    name: 'shipment',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

    },
})

export const { } = shipmentSlice.actions

export default shipmentSlice.reducer