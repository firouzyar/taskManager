export const ADD_COURSE = 'ADD_COURSE';

const initialState = {
    course :[
        {
            id:1,
            title:"english",
            time:"12:15:00"
        }
    ]
}

const CourseReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_COURSE:
            return {
                ...state,
                comments: action.data
            }
        default:
            return state;
    }
}

export default CourseReducer;