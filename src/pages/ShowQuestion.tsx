import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
    addComment,
    countLikeComment,
    countLikeQuestion,
    getIdQuestion,
} from "../features/questionApi";
import { Question, Comment } from "../types";

export const ShowQuestions: FC = () => {
    const dispatch = useAppDispatch();

    const { oneQuestion } = useAppSelector((state) => state.AddQuestionSlice);
    console.log(oneQuestion);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getIdQuestion(Number(id)));
    }, [dispatch, id]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Comment>();

    const saveComment = async (data: Comment) => {
        await dispatch(addComment({ ...data, questionId: id }));
        dispatch(getIdQuestion(Number(id)));
        console.log(data);
        reset();
    };

    return (
        <>
            <div className="flex gap-20">
                <div>
                    <div className="flex gap-3">
                        <p>
                            <span className="text-red-700">Question: </span>
                            {oneQuestion.question}
                        </p>

                        <p>{oneQuestion.likeCount}</p>
                        <button
                            onClick={() =>
                                dispatch(countLikeQuestion(oneQuestion.id))
                            }
                        >
                            Like
                        </button>
                    </div>
                    <div>
                        {oneQuestion.categories?.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h1>
                                        <span className="text-red-700">
                                            Category:{" "}
                                        </span>
                                        {item.name}
                                    </h1>
                                    <h1></h1>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        {oneQuestion.comments?.map((it) => {
                            return (
                                <div key={it.id} className="flex gap-3">
                                    <div>
                                        <h1>
                                            <span className="text-red-700">
                                                Comment:{" "}
                                            </span>

                                            {it.text}
                                        </h1>
                                    </div>
                                    <div>
                                        <p>{it.likeCount}</p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    countLikeComment({
                                                        id: it.id,
                                                        question:
                                                            oneQuestion.id,
                                                    })
                                                )
                                            }
                                        >
                                            Like
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(saveComment)}
                    className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 h-[40vh] flex flex-col justify-center align-center"
                >
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Add New Comment
                    </label>
                    <textarea
                        {...register("text", {
                            required: "Field is required",
                        })}
                        className="w-[100%] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input
                        type="text"
                        {...register("email", {
                            required: "Field is required",
                        })}
                        className="w-[100%] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button className="mt-2 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[50%]">
                        Add
                    </button>
                </form>
            </div>
        </>
    );
};
