import { useQuery } from '@apollo/client';
import React from 'react'
import { USER } from '../queries/user';

const User = () => {
    const { loading, error, data } = useQuery(USER, { fetchPolicy: "network-only" });
    const { profile } = (data !== undefined) && data;
    console.log(profile);

    return (
        <div>
            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>Error 404</p>
            }
        </div>
    )
}

export default User;
