import { ActionTypes } from "../constants/action-types";
export const setStudent = (students) => {
    return {
        type: ActionTypes.SET_STUDENTS,
        payload: students,
    };
};

export const setBooks = (books) => {
    return {
        type: ActionTypes.SET_BOOKS,
        payload: books,
    };
};
export const setSelectedStudent = (student) => {
    return {
        type: ActionTypes.SELECTED_STUDENT,
        payload: student,
    };
};