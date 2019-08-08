import axios from "axios";

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_USERS'});
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch({type: 'FETCH_USERS_FULFILLED', payload: response.data});
            })
            .catch(error => {
                dispatch({type: 'FETCH_USERS_REJECTED', payload: error});
            });
    };
};

export const addUser = (data) => {
    return {
        type: 'ADD_USER',
        payload: data,

    };
};

export const updateUser = (data) => {
    return {
        type: 'UPDATE_USER',
        payload: data,

    };
};

export const deteteUser = (userID) => {
    return { type: 'DELETE_USER', payload: userID};
};