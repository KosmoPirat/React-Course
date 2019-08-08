import axios from 'axios';
import dispatcher from '../dispatcher';

export function addPost(title, userId, body) {
    const action = {
        type: 'ADD_POST',
        data: { title, userId, body }
    };
    dispatcher.dispatch(action);
}

export function getPosts() {
    axios.get('http://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            const action = {
                type: 'GET_POSTS',
                data: response.data
            };
            dispatcher.dispatch(action);
        })
}

export function addUser(id, name, username, phone, website, email) {
    const action = {
        type: 'ADD_USER',
        data: { id, name, username, phone, website, email }
    };
    dispatcher.dispatch(action);
}

export function getUsers() {
    axios.get('http://jsonplaceholder.typicode.com/users/')
        .then(response => {
            const action = {
                type: 'GET_USERS',
                data: response.data
            };
            dispatcher.dispatch(action);
        })
}