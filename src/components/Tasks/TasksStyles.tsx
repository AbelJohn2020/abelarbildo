import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { State } from "./TasksType";

export type boxTaskStylesType = {
    showHide: State | undefined;
}

export const BoxTasksStyles = styled.div(({ showHide }: boxTaskStylesType) => css`
    display: ${showHide && showHide.show === false ? 'none' : 'flex'};
`)

export const TaskTagsStyles = styled.div(({ showHide }: boxTaskStylesType) => css`
    box-sizing: border-box;
    margin: ${showHide && showHide.show ? '0 0 16px 0' : '0'};
`);