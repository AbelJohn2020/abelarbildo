import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";

const rotate = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const LoadingStyles = styled.div`
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Spiner = styled.div`
    color: official;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;

    & div {
        transform-origin: 28px 28px;
        animation: ${rotate} 1.2s linear infinite;
    }

    & div:after {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 24px;
        width: 6px;
        height: 16px;
        border-radius: 24%;
        background: ${colors.neutral2};
    }

    & div:nth-of-type(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
    }

    & div:nth-of-type(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
    }

    & div:nth-of-type(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
    }

    & div:nth-of-type(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
    }

    & div:nth-of-type(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
    }

    & div:nth-of-type(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
    }

    & div:nth-of-type(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
    }

    & div:nth-of-type(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
    }

    & div:nth-of-type(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
    }

    & div:nth-of-type(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
    }

    & div:nth-of-type(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
    }

    & div:nth-of-type(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
    }
`;