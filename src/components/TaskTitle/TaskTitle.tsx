import React from 'react'
import { Input } from '../Input/Input';
import { colors } from '../UI/colors';
import Mplus from '../iconsImages/minusplus.png';
import Icons from '../Icons/Icons';
import { BoxCC, BoxIconsButtonsTT, ButtonsTT, NameButtonsTT, TaskTitleStyles } from './TaskTitleStyles';

type taskTitle = {
    inputValueTaskTitle: string,
    setInputValueTaskTitle: React.Dispatch<React.SetStateAction<string>>
}

const TaskTitle = ({inputValueTaskTitle, setInputValueTaskTitle}: taskTitle) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueTaskTitle(event.target.value)
    }
    return (
        <TaskTitleStyles>
            <Input
                inputType="text"
                name="taskTitle"
                placeholder="task title"
                value={inputValueTaskTitle}
                onChange={handleChange}
                isThereFirstIcon={false}
                isThereSecondIcon={false}
                firstIcon=""
                secondIcon=""
                photo={false}
                profile=""
                width="100%"
                color={colors.neutral}
                border="none"
                inputPlaceholder={colors.neutral2}  
                inputPadding="6px 0" 
                inputMargin="0" 
                inputBackground="transparent"
                radius="0"
                background={colors.neutral3}
            />
            
            <BoxIconsButtonsTT margin="8px 0 16px 0">
                <ButtonsTT background={colors.background} color={colors.neutral2} margin="0 8px 0 0">
                    <i className='iconImageTT'>
                        <img src={Mplus} alt="icon minus plus"/>
                    </i>
                    <NameButtonsTT>estimate</NameButtonsTT>
                </ButtonsTT>

                <ButtonsTT background={colors.background} color={colors.neutral2} margin="0 8px 0 0">
                    <Icons type="assignee" className="icons" />
                    <NameButtonsTT>assignee</NameButtonsTT>
                </ButtonsTT>

                <ButtonsTT background={colors.background} color={colors.neutral2} margin="0">
                    <Icons type="label" className="icons" />
                    <NameButtonsTT>label</NameButtonsTT>
                </ButtonsTT>
            </BoxIconsButtonsTT>

            <BoxCC>
                <BoxIconsButtonsTT margin="0">
                    <ButtonsTT background={colors.background} color={colors.neutral2} margin="0 8px 0 0">
                        <NameButtonsTT>cancel</NameButtonsTT>
                    </ButtonsTT>
                    <ButtonsTT background={colors.background} color={colors.neutral2} margin="0">
                        <NameButtonsTT>create</NameButtonsTT>
                    </ButtonsTT>
                </BoxIconsButtonsTT>
            </BoxCC>
        </TaskTitleStyles>
    )
}

export default TaskTitle;
