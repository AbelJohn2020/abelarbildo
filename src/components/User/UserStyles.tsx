import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const UserStyles = styled.div`
    color: ${colors.neutral2}
`;

export const DefaulPhoto = styled.div`
    width: 16%;
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

export const BoxInformation = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

export const BoxInformationSon = styled.div`
    width: 40%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: : center;
`;