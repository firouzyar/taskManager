export const ADD_COURSE = 'ADD_COURSE';


export const addCourse = (data) => {
    return {
        type: ADD_COURSE,
        data
    };
}