import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { getAllQuestions } from "../features/questionApi";
import { Question } from "../types";
import { Link } from "react-router-dom";

export const TopQuestion: FC = () => {
    const { question } = useAppSelector((state) => state.AddQuestionSlice);
    const [searchText, setSearchText] = useState<string>('');

    const filteredQuestions = question
        .filter((item: Question) =>
            item.question.toLowerCase().includes(searchText.toLowerCase())
        )
        .sort((min: Question, max: Question) => max.likeCount - min.likeCount);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllQuestions());
    }, [dispatch]);

    return (
        <>
            <div className="flex gap-3 flex-col">
                <div>
                    <input
                        type="text"
                        value={searchText}
                        placeholder="Search"
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-[20%] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-[1%]"
                    />
                </div>
                {filteredQuestions.map((item: Question) => {
                    return (
                        <div key={item.id} className="div1">
                            <h1><span className="text-red-700">Question: </span></h1>
                            <p>{ item.question.length > 30 ? item.question.substring(0, 30) + '...' : item.question}</p>
                            <h1><span className="text-red-700">Comments length: </span>{item.comments.length}</h1>
                            <h1><span className="text-red-700">Like Count: </span>{item.likeCount}</h1>
                            {item.categories.map((it) => (
                                <div key={it.id}>
                                    <h1><span className="text-red-700">Category: </span>{it.name}</h1>
                                </div>
                            ))}
                            <Link
                                className="mt-2 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[10%] ml-[75%]"
                                to={'/show/' + item.id}
                            >
                                Show Question
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
