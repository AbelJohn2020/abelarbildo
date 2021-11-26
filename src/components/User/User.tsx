import React from 'react'
import { useQuery } from '@apollo/client';
import { USER } from '../queries/queries';
import { DefaulPhoto, UserStyles } from './UserStyles';
import Icons from '../Icons/Icons';

const User = () => {
    const { loading, error, data } = useQuery(USER, { fetchPolicy: "network-only" });
    const { profile } = (data !== undefined) && data;
    console.log(profile);

    return (
        <UserStyles>
            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>Error 404</p>
            }
            <div>
                <DefaulPhoto><Icons type="assignee" className="iconInput" /></DefaulPhoto>
                <label>Name: </label>
                <div>{profile && profile.fullName}</div>
                <br />
                <label>Type: </label>
                <div>{profile && profile.email}</div>
                <br />
                <label>Type: </label>
                <div>{profile && profile.type}</div>
                <br />
                <label>Created: </label>
                <div>{profile && (new Date(profile.createdAt)).toDateString()}</div>
            </div>
        </UserStyles>
    )
}

export default User;
