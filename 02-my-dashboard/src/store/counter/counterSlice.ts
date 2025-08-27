import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    // Define el estado inicial y los tipos según tus necesidades
    count: number;
    isReady: boolean; // Ejemplo de estado adicional
}

const initialState: CounterState = {
    count: 5,
    isReady: false,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        initCounterState(state, action: PayloadAction<number>) {
            if(state.isReady) return;
            state.count = action.payload < 0 ? 0 : action.payload;
            state.isReady = true;
        },

        addOne(state) {
            state.count++;
        },
        subOne(state) {
            if (state.count === 0) return;
            state.count--;
        },
        resetCounter(state, action: PayloadAction<number>) {
            if (action.payload < 0) action.payload = 0;
            state.count = action.payload;
        },
    },
});

export const {initCounterState, addOne, resetCounter, subOne } = counterSlice.actions;

export default counterSlice.reducer;
