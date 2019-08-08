import React, { Component } from 'react'
import UsersList from '../components/UsersList';
import { getUsers } from "../actions/actionCreators";
import UserStore from "../stores/userStore";
import NewUser from "../components/NewUser"

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.onUserChange = this.onUserChange.bind(this);
    }

    onUserChange() {
        const users = UserStore.users;
        this.setState({ users });
    }

    componentDidMount() {
        UserStore.on('change', this.onUserChange);
        getUsers();
    }

    componentWillUnmount() {
        UserStore.removeListener('change', this.onUserChange);
    }

    render() {
        return (
            <>
                <NewUser/>
                <UsersList users={this.state.users} />
            </>
        )
    }
}
