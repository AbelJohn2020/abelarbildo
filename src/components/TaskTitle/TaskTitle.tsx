import React, { useState } from 'react'
import { Input } from '../Input/Input';
import { colors } from '../UI/colors';
import Mplus from '../iconsImages/minusplus.png';
import { BoxCC, BoxIconsButtonsTT, ButtonsCC, NameButtonsTT, TaskTitleStyles } from './TaskTitleStyles';
import { taskmodels } from '../Tasks/TasksType';
import DropDown from '../DropDown/DropDown';
import { globalstate } from '../../App';

type taskTitle = {
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    tasks: taskmodels[],
    globalState: globalstate,
    setGlobalData: React.Dispatch<React.SetStateAction<globalstate>>,

};

export type drop = {
    id: string,
    isActive: boolean,
}

const labels = [
    'ANDROID',
    'IOS',
    'NODE_JS',
    'RAILS',
    'REACT',
];

const estimates = [
    '0 points',
    '1 points',
    '2 points',
    '4 points',
    '8 points',
];

const dropState = [
    {id: "estimate", isActive: false},
    {id: "assignee", isActive: false},
    {id: "label", isActive: false},
];

const TaskTitle = ({ setIsActive, tasks, globalState, setGlobalData }: taskTitle) => {
    const [dropdownState, setDropdownState] = useState<drop[]>(dropState);

    console.log(globalState)

    const getWorkers = () => {
        const workers = tasks && tasks.map(({owner}: taskmodels) => {
            return { avatar: owner.avatar, fullName: owner.fullName }
        });

        return workers.filter( (addStates, index, self) => index === self.findIndex((s) => s.avatar === addStates.avatar));
    }
    
    const handleCancel = () => {
        setIsActive(false);
        setGlobalData({
            taskTitleInput: '',
            estimate: '',
            assignee: '',
            label: '',
            dueDate: '',
        })
    }

    const handleCreate = () => {
        setIsActive(false);
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGlobalData({ ...globalState, taskTitleInput: event.target.value })
    }

    const handleChangeDueDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        setGlobalData({ ...globalState, dueDate: date })
    }

    const workers = getWorkers();

    return (
        <TaskTitleStyles>
            <Input
                inputType="text"
                name="taskTitleInput"
                placeholder="task title"
                value={globalState.taskTitleInput}
                onChange={handleChangeInput}
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
                <div>
                    <DropDown 
                        options={estimates}
                        image={true}
                        nameImage={Mplus}
                        name="estimate" 
                        icon="plus"
                        dropdownState={dropdownState}
                        setDropdownState={setDropdownState}
                        globalState={globalState}
                        setGlobalData={setGlobalData}
                        keyState="estimate"
                    />
                </div>
                <div>
                    <DropDown 
                        options={workers}
                        image={false}
                        nameImage="" 
                        name="assignee" 
                        icon="assignee"
                        dropdownState={dropdownState}
                        setDropdownState={setDropdownState}
                        globalState={globalState}
                        setGlobalData={setGlobalData}
                        keyState="assignee"
                    />
                </div>
                <div>
                    <DropDown 
                        options={labels}
                        image={false}
                        nameImage="" 
                        name="label" 
                        icon="label"
                        dropdownState={dropdownState}
                        setDropdownState={setDropdownState}
                        globalState={globalState}
                        setGlobalData={setGlobalData}
                        keyState="label"
                    />
                </div>
            </BoxIconsButtonsTT>

            <BoxCC>
                <input type="date" value={globalState.dueDate} onChange={handleChangeDueDate} name='dueDate'/>
                <BoxIconsButtonsTT margin="0">
                    <ButtonsCC background="transparent" color={colors.neutral} margin="0 8px 0 0" onClick={handleCancel}>
                        <NameButtonsTT>cancel</NameButtonsTT>
                    </ButtonsCC>
                    <ButtonsCC background="transparent" color={colors.neutral} margin="0" onClick={handleCreate}>
                        <NameButtonsTT>create</NameButtonsTT>
                    </ButtonsCC>
                </BoxIconsButtonsTT>
            </BoxCC>
        </TaskTitleStyles>
    )
}

export default TaskTitle;
