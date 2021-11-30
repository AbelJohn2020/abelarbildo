import React from 'react'
import { useQuery } from '@apollo/client';
import { USER } from '../queries/queries';
import { BoxInformation, BoxInformationSon, DefaulPhoto, UserStyles } from './UserStyles';
import Icons from '../Icons/Icons';
import Loading from '../Loading/Loading';

const User = () => {
    const { loading, error, data } = useQuery(USER, { fetchPolicy: "network-only" });
    const { profile } = (data !== undefined) && data;
    console.log(profile);

    return (
        <UserStyles>
            {
                error && <p>Error 404</p>
            }
            {
                loading ?   <Loading />
                        :   <BoxInformation>
                                <BoxInformationSon>
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
                                </BoxInformationSon>
                            </BoxInformation>
            }
        </UserStyles>
    )
}

export default User;
