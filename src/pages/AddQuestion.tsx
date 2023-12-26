import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { addQuestion, getGategory } from "../features/questionApi";
import { Category, Question } from "../types";

export const AddQuestion: FC = () => {
    const { categories } = useAppSelector((state) => state.AddQuestionSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGategory());
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Question>();

    // const [limit, setLimit] = useState<string>("");

    const saveQuestion = (data: Question) => {
        dispatch(addQuestion(data));
        reset();
    };

    // const limitText = (text: string, maxLength: number) => {
    //     return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    // };

    // const limitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setLimit(limitText(event.target.value, 30));
    // };

    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit(saveQuestion)}
                    className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 h-[50vh] flex flex-col justify-start align-center"
                >
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Add Your Question
                    </label>
                    <input
                        type="text"
                        {...register("question", {
                            required: "Field is required",
                        })}
                        // value={limit}
                        // onChange={limitChange}
                        className="w-[30%] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div>
                        <select
                            {...register("categories", {
                                required: "Field is required",
                            })}
                            multiple
                            className="w-[30%] mt-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="" hidden>
                                Select a category
                            </option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="mt-2 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded w-[22%] h-[6vh]">
                        Add New Question
                    </button>
                </form>
            </div>
        </>
    );
};
