import React from 'react';
import wordsToNumbers from 'words-to-numbers';
import Icons from '../Icons/Icons';
import { BoxGlobalTask, BoxTasksTagsLength, BoxTaskTag, ButtonTask, H1TaskTitleStyles, Img, Lenght, LimitAndPadding, TaskAssign, TaskModelNameStyles, TasksTagsLength, TaskTitleStyles } from './TaskModelStyles';
import { taskmodelname, taskmodels, taskmodeltitle } from './TaskModelsType';

export const TaskModelTitle = ({firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn}: taskmodeltitle) => {
    return (
        <BoxGlobalTask grid="35.5% 16% 12% 20% 16%" margin="0 0 18px 0">
            <TaskTitleStyles radius="4px 0 0 4px">
                <H1TaskTitleStyles size="18px" weight="normal" lineHeight="24px" padding="18px"># {firstColumn}</H1TaskTitleStyles>
            </TaskTitleStyles>
            <TaskTitleStyles radius="0">
                <H1TaskTitleStyles size="18px" weight="normal" lineHeight="24px" padding="18px">{secondColumn}</H1TaskTitleStyles>
            </TaskTitleStyles>
            <TaskTitleStyles radius="0">
                <H1TaskTitleStyles size="18px" weight="normal" lineHeight="24px" padding="18px">{thirdColumn}</H1TaskTitleStyles>
            </TaskTitleStyles>
            <TaskTitleStyles radius="0">
                <H1TaskTitleStyles size="18px" weight="normal" lineHeight="24px" padding="18px">{fourthColumn}</H1TaskTitleStyles>
            </TaskTitleStyles>
            <TaskTitleStyles radius="0 4px 4px 0">
                <H1TaskTitleStyles size="18px" weight="normal" lineHeight="24px" padding="18px">{fifthColumn}</H1TaskTitleStyles>
            </TaskTitleStyles>
        </BoxGlobalTask>
    )
}


export const TaskModels = ({ title, tasksTags, pointEstimate, image, name, tasksAssignName, dueDate }: taskmodels) => {
    const converEestimate = () => {
        const lower =  pointEstimate.toString().toLowerCase();
        return wordsToNumbers(lower);
    }
    
    const estimate = converEestimate();

    const convertDueDate = () => {
        const date = new Date();
        const today = date.toDateString();

        const newDate = new Date(dueDate);
        const day = newDate.toDateString();

        const arrToday = today.split(' ');
        const arrDay = day.split(' ');

        if(arrToday[1] === arrDay[1] && arrToday[3] === arrDay[3]) {
            if(Number(arrToday[2]) === Number(arrDay[2])) {
                return 'today';
            } else {
                if(Number(arrToday[2]) === (Number(arrDay[2]) + 1)) {
                    return 'yesterday';
                } else {
                    if((Number(arrToday[2]) + 1) === Number(arrDay[2])) {
                        return 'tomorrow'
                    } else {
                        return day;
                    }
                }
            }
        } else {
            return day;
        }
    }

    const dueDt = convertDueDate();

    return (
        <BoxGlobalTask grid="35.5% 16% 12% 20% 16%" margin="0">
            <TaskTitleStyles radius="0">
                <H1TaskTitleStyles size="18px" weight="400" lineHeight="24px" padding="16px">{title}</H1TaskTitleStyles>
            </TaskTitleStyles>
            <TaskTitleStyles radius="0">
                <LimitAndPadding>
                    {
                        tasksTags && tasksTags.length > 1 
                            ?   <BoxTasksTagsLength>
                                    <BoxTaskTag tag={tasksTags[0].toString()}>{tasksTags[0]}</BoxTaskTag>
                                    <TasksTagsLength>+{tasksTags.length -1}</TasksTagsLength>
                                </BoxTasksTagsLength>
                            :   <BoxTaskTag tag={tasksTags.toString()}>{tasksTags}</BoxTaskTag>
                            
                    }
                </LimitAndPadding>
            </TaskTitleStyles>
            <TaskTitleStyles radius="0">
                <H1TaskTitleStyles size="18px" weight="400" lineHeight="24px" padding="16px">{estimate} points</H1TaskTitleStyles>
                
            </TaskTitleStyles>
            <TaskAssign>
                <Img src={image} alt={name} />
                <H1TaskTitleStyles size="18px" weight="400" lineHeight="24px" padding="0">{tasksAssignName}</H1TaskTitleStyles>
            </TaskAssign>
            <TaskTitleStyles radius="0">
                <H1TaskTitleStyles size="18px" weight="400" lineHeight="24px" padding="16px">{dueDt}</H1TaskTitleStyles>
            </TaskTitleStyles>
        </BoxGlobalTask>
    )
}


export const TaskModelName = ({id, title, icon, length, state, setState}: taskmodelname) => {
    const handleClick = (event: { currentTarget: { id: string } }) => {
        const newArr = state.map((prevState) => {
            if(prevState.id === event.currentTarget.id ) {
                return { ...prevState, show:!(prevState.show) }
            } else {
                return { ...prevState };
            }
        });

        setState(newArr);
    }

    const isTrue = (divId: string) => {
        return state.find(({ id }) => divId === id )
    }

    const separation = isTrue && isTrue(id);

    return(
        <TaskModelNameStyles id={id} separation={separation}>
            <ButtonTask name={title} id={id} onClick={handleClick}>
                <Icons type={icon} className="iconTMN"/>
            </ButtonTask>
            <div>
                <H1TaskTitleStyles size="20px" weight="600" lineHeight="32px" padding="0 0 0 4px">
                    {title}<Lenght>{`(0${length})`}</Lenght>
                </H1TaskTitleStyles>
            </div>
        </TaskModelNameStyles>
    )
}
