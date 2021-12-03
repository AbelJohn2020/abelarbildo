import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { State } from "../Tasks/TasksType";
import { colors } from "../UI/colors";

type global = {
    grid: string,
    margin: string,
}

type title = {
    radius: string,
}

type h1 = {
    size: string,
    weight: string,
    lineHeight: string,
    padding: string,
}

type taskTitle = {
    separation: State | undefined
}

type tag = {
    tag: string,
}

export const BoxGlobalTask = styled.div(({grid, margin}: global) => css`
    width: 100%;
    margin: ${margin};
    box-sizing: boder-box;
    display: grid;
    grid-template-columns: ${grid};
    gap: 1px;
`);

export const TaskTitleStyles = styled.div(({radius}: title) => css`
    box-sizing: boder-box;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${colors.neutral};
    border: ${colors.neutral3} solid 1px;
    border-radius: ${radius};
    background: ${colors.neutral4};
`);

export const H1TaskTitleStyles = styled.h1(({ size, weight, lineHeight, padding }: h1) => css`
    padding: ${padding};
    box-sizing: boder-box;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: ${weight};
    font-size: ${size};
    line-height: ${lineHeight};
    text-transform: capitalize;
    letter-spacing: 0.75px;
    display: flex;
`);

export const TaskModelNameStyles = styled.div(({separation}: taskTitle) => css`
    display: flex;
    align-items: center;
    color: ${colors.neutral};
    background: ${colors.neutral4};
    padding: 14px;
    box-sizing: boder-box;
    border-radius: ${separation?.show === false ? "0" : "4px 4px 0 0"};
    margin: ${separation?.show === false ? "0 0 4px 0" : "0"};
`);

export const Lenght = styled.div`
    box-sizing: boder-box;
    color: ${colors.neutral2};
    padding: 0 0 0 6px;
`;

export const ButtonTask = styled.button`
    box-sizing: boder-box;
    color: ${colors.neutral2};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 2px 4px;
    background: transparent;

    .iconTMN {
        font-size: 16px;
    }
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 0 12px 0 0;
`;

export const TaskAssign = styled.div`
    box-sizing: boder-box;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${colors.neutral};
    border: ${colors.neutral3} solid 1px;
    background: ${colors.neutral4};
    padding: 8px 16px;
`;

export const BoxTaskTag = styled.div(({tag}: tag) => `
    padding: 4px 8px;
    background: ${(tag === "ANDROID" || tag === "NODE_JS") ? colors.backgroundS : colors.backgroundT};
    color: ${(tag === "ANDROID" || tag === "NODE_JS") ? colors.secondary : colors.tertiary};
    margin: 0 8px 0 0;
`);

export const LimitAndPadding = styled.div`
    width: 100%;
    padding: 8px 16px;
    display: flex;
`;

export const BoxTasksTagsLength = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
`;

export const TasksTagsLength = styled.div`
    padding: 4px 12px;
    box-sizing: boder-box;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    letter-spacing: 0.75px;
    display: flex;
    background: ${colors.background};
    border-radius: 4px;
`;