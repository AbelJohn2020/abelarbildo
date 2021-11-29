import React from 'react';
import './loading.css';
import { LoadingStyles, Spiner } from './LoadingStyles';

const Loading = () => {
    return (
        <LoadingStyles>
            <Spiner>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Spiner>
        </LoadingStyles>
    )
}

export default Loading
