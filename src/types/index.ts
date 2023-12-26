export interface Pokedex {
    questions: Question[];
}

export interface Question {
    id:         number;
    question:   string;
    likeCount:  number;
    categories: Category[];
    comments:   Comment[];
    like?: boolean
    quLike?: boolean
}

export interface Category {
    id:    number;
    name:  string;
    question_categories: QuestionCategories;
}

export interface QuestionCategories {
    questionId: number;
    categoryId: number;
}

export interface Comment {
    id:         number;
    text:       string;
    email:      string;
    likeCount:  number;
    createdAt:  null;
    updatedAt:  null;
    questionId: number;
}

// .unwrap().then(() => dispatch(getIdQuestion()))

