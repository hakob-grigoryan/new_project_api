import  AddQuestionSlice  from './../features/AddQuestionSlice';
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer: {
        AddQuestionSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
