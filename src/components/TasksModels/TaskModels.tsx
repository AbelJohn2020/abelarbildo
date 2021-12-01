import React from 'react'
import wordsToNumbers from 'words-to-numbers'
import Icons from '../Icons/Icons'
import { taskmodelname, taskmodels, taskmodeltitle } from './TaskModelsType'

export const TaskModelTitle = ({firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn}: taskmodeltitle) => {
    return (
        <div>
            <div>
                <h1># {firstColumn}</h1>
            </div>
            <div>
                <h1>{secondColumn}</h1>
            </div>
            <div>
                <h1>{thirdColumn}</h1>
            </div>
            <div>
                <h1>{fourthColumn}</h1>
            </div>
            <div>
                <h1>{fifthColumn}</h1>
            </div>
        </div>
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
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                {
                    tasksTags && tasksTags.length > 1 
                        ?   tasksTags.map( (task: any) => (
                            <div key={task}>{task}</div>
                        ))
                        :   <div>{tasksTags}</div>
                }
            </div>
            <div>
                {estimate}
            </div>
            <div>
                <img src={image} alt={name} />
                <h1>{tasksAssignName}</h1>
            </div>
            <div>
                {dueDt}
            </div>
        </div>
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

    return(
        <div id={id}>
            <button name={title} id={id} onClick={handleClick}>
                <Icons type={icon} className="iconTMN"/>
            </button>
            <div>
                <h1>{`${title}(${length})`}</h1>
            </div>
        </div>
    )
}
