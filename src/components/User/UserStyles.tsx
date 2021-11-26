import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const UserStyles = styled.div`
    color: ${colors.neutral2}
`;

export const DefaulPhoto = styled.div`
    width: 6.4%;
    margin: 0 0 24px 0 ;
    padding: 16px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: none;
    outline: none;
    background: ${colors.neutral3};
    cursor: pointer;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    .iconInput {
        color: ${colors.neutral2};
        font-size: 40px;
        box-sizing: border-box;
    }
`;