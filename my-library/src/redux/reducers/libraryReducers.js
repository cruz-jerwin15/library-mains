import { ActionTypes } from "../constants/action-types"

const initialState = {
    students: [ 
        {
            id:1,
            lastname:'Cruz',
            firstname:'Jerwin',
            state:'ACTIVE'
        },
        {
            id:2,
            lastname:'Navaliza',
            firstname:'Vincent',
            state:'ACTIVE'

        }

    ]
}

const bookState = {
    books: [ 
        {
            id:1,
            bookname:'Cruz',
         
        },
        {
            id:2,
            bookname:'Navaliza',
          

        }

    ]
}
const singleStudentInitialized={
    id:'',
    firstname:'',
    lastname:'',
    state:'ACTIVE'
}
export const libraryReducer = (state=initialState, { type,payload}) => {
    switch (type) {
        case ActionTypes.SET_STUDENTS:
            return {...state,students:payload};
        default:
            return state;
    }
}
export const bookReducer = (state=bookState, { type,payload}) => {
    switch (type) {
        case ActionTypes.SET_BOOKS:
            return {...state,books:payload};
        default:
            return state;
    }
}
export const selectedStudentReducer = (state = singleStudentInitialized, { type,payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_STUDENT:
            return { ...state, ...payload};
        default:
            return state;
    }
}