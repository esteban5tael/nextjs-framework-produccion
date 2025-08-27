'use client';
/* ----------- Store ----------- */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        counter:counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();


/* ----------- Providers ----------- */

import { Provider } from "react-redux";


interface Props {
    children: React.ReactNode;
}


export const metadata = {
 title: 'Redux Store Provider',
 description: 'Redux Store Provider',
};

export const Providers = ({ children }: Props) => {
    return <Provider store={store}>{children}</Provider>;
};