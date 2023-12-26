import { Question, Comment } from "./../types/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addQuestion = createAsyncThunk(
    "question/add",
    async (quesion: Question) => {
        const { data } = await axios.post(
            "http://localhost:5000/question/",
            quesion
        );
        return data;
    }
);

export const getGategory = createAsyncThunk("category/add", async () => {
    const { data } = await axios.get("http://localhost:5000/categories");
    return data;
});

export const getAllQuestions = createAsyncThunk(
    "all-questions/get",
    async () => {
        const { data } = await axios.get("http://localhost:5000/question/");

        return data;
    }
);

export const getIdQuestion = createAsyncThunk(
    "get-id/find",
    async (id: number) => {
        const { data } = await axios.get(
            "http://localhost:5000/question/" + id
        );
        return data.question;
    }
);

export const addComment = createAsyncThunk(
    "add-com/post",
    async (text: any) => {
        const { data } = await axios.post(
            "http://localhost:5000/question/comment",
            text
        );
        return data;
    }
);

export const countLikeComment = createAsyncThunk(
    "comments/get/like",
    async (changeLike: { id: number; question: number }) => {
        await axios.patch(
            "http://localhost:5000/question/comment/like/" + changeLike.id
        );
        const { data } = await axios.get(
            "http://localhost:5000/question/" + changeLike.question
        );
        return data.question;
    }
);

export const countLikeQuestion = createAsyncThunk(
    "question/get/like",
    async (id: number) => {
        await axios.patch("http://localhost:5000/question/like/" + id);
        const { data } = await axios.get(
            "http://localhost:5000/question/" + id
        );
        return data.question;
    }
);


export const getSearchQuestions = createAsyncThunk(
    'search-questions/get',
    async () => {
      const searchText = 'your_search_text_here'; 
      const { data } = await axios.get('http://localhost:5000/question/search' + searchText);
  
      return data;
    }
  );
