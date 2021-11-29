import React from 'react'
import { Input } from '../Input/Input';
import { colors } from '../UI/colors';

type taskTitle = {
    inputValueTaskTitle: string,
    setInputValueTaskTitle: React.Dispatch<React.SetStateAction<string>>
}

const TaskTitle = ({inputValueTaskTitle, setInputValueTaskTitle}: taskTitle) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueTaskTitle(event.target.value)
    }
    return (
        <div>
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
                inputPadding="16px" 
                inputMargin="0" 
                inputBackground="transparent"
            />
        </div>
    )
}

export default TaskTitle;
