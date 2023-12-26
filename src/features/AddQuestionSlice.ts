import { createSlice } from "@reduxjs/toolkit";
import {
    addQuestion,
    getGategory,
    getAllQuestions,
    getIdQuestion,
    addComment,
    countLikeComment,
    countLikeQuestion,
    getSearchQuestions,
} from "./questionApi";
import { Category,  Question, Comment } from "../types";

interface QuestionState {
    question: Question[];
    categories: Category[];
    oneQuestion: Question;
}

const initialState: QuestionState = {
    question: [],
    categories: [],
    oneQuestion: {} as Question,
};

export const AddQuestionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addQuestion.fulfilled, (state, action) => {});

        builder.addCase(getGategory.fulfilled, (state, action) => {
            state.categories = action.payload.categories;
        });

        builder.addCase(getAllQuestions.fulfilled, (state, action) => {
            state.question = action.payload.questions;
        });

        builder
            .addCase(getIdQuestion.fulfilled, (state, action) => {
                state.oneQuestion ={... action.payload, comments:action.payload.comments?.sort((a:Comment, b:Comment)=>b.likeCount-a.likeCount)};
            })
            .addCase(countLikeComment.fulfilled, (state, action) => {
                state.oneQuestion ={... action.payload, comments:action.payload.comments?.sort((a:Comment, b:Comment)=>b.likeCount-a.likeCount)};
            })
            .addCase(countLikeQuestion.fulfilled, (state, action) => {
                state.oneQuestion ={... action.payload, comments:action.payload.comments?.sort((a:Comment, b:Comment)=>b.likeCount-a.likeCount)};
            });

        builder.addCase(addComment.fulfilled, (state, action) => {
            console.log(action.payload);
        });
    },
});

export const {} = AddQuestionSlice.actions;

export default AddQuestionSlice.reducer;
