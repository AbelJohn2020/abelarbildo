import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { Task } from '../Cards/TypeCard';
import Loading from '../Loading/Loading';
import { TASKS } from '../queries/queries';
import { TaskModelName, TaskModels, TaskModelTitle } from '../TasksModels/TaskModels';
import { BoxTasksStyles } from './TasksStyles';
import { State, taskmodels } from './TasksType';

const state = [
    { id: "1", show: true, name: "backlog" },
    { id: "2", show: true, name: "todo" },
    { id: "3", show: true, name: "in progress" },
    { id: "4", show: true, name: "cancelled" },
];

const Tasks = () => {
    const { loading, error, data } = useQuery(TASKS);
    const { tasks } = (data !== undefined) && data;
    
    const [showHide, setShowHide] = useState<State[]>(state)

    const getBacklog = () => {
        if(tasks !== undefined) {
            return tasks.filter(({status}: Task) => status.toString() === "BACKLOG" );
        } else {
            return tasks;
        }
    }

    const getInProgress = () => {
        if(tasks !== undefined) {
            return tasks.filter(({status}: Task) => status.toString() === "IN_PROGRESS" );
        } else {
            return tasks;
        }
    }

    const getTodo = () => {
        if(tasks !== undefined) {
            return tasks.filter(({status}: Task) => status.toString() === "TODO" );
        } else {
            return tasks;
        }
    }

    const getCancelled = () => {
        if(tasks !== undefined) {
            return tasks.filter(({status}: Task) => status.toString() === "CANCELLED" );
        } else {
            return tasks;
        }
    }

    const findTrue = (divId: string) => {
        return showHide.find(({ id }) => divId === id )
    }
    
    
    const backlog = getBacklog();
    const todo = getTodo();
    const inProgress = getInProgress();
    const cancelled = getCancelled();
    
    return (
        <div>
            {
                error && <p>Error 404</p>
            }
            <div>
                <TaskModelTitle firstColumn="task name" secondColumn="task tag" thirdColumn="estimate" fourthColumn="task assign name" fifthColumn="due date" />
            </div>
            {
                loading
                    ?   <Loading />
                    :   <div>
                            <div>
                                <TaskModelName id="1" title="backlog" icon="down" length={backlog && backlog.length} state={showHide} setState={setShowHide} />
                                <div>
                                    {
                                        backlog && backlog.map(({ id, name, pointEstimate, tags, owner, dueDate }: taskmodels) => (
                                            <BoxTasksStyles key={id} id='1' showHide={findTrue('1')}>

                                                <TaskModels
                                                    title={name}
                                                    tasksTags={tags}
                                                    pointEstimate={pointEstimate}
                                                    image={owner && owner.avatar}
                                                    name={owner && owner.fullName}
                                                    tasksAssignName={owner && owner.fullName}
                                                    dueDate={dueDate}
                                                />
                                            </BoxTasksStyles>
                                        ))
                                    }
                                </div>
                            </div>
                            <BoxTasksStyles id='2' showHide={findTrue('2')}>
                                <TaskModelName state={showHide} setState={setShowHide} id="2" title="todo" icon="down" length={todo && todo.length} />
                                <div>
                                    {
                                        todo && todo.map(({ id, name, pointEstimate, tags, owner, dueDate}: taskmodels) => (
                                            <BoxTasksStyles key={id} id='2' showHide={findTrue('2')}>
                                                <TaskModels
                                                    title={name} 
                                                    tasksTags={tags} 
                                                    pointEstimate={pointEstimate} 
                                                    image={owner && owner.avatar} 
                                                    name={owner && owner.fullName} 
                                                    tasksAssignName={owner && owner.fullName} 
                                                    dueDate={dueDate} 
                                                />
                                            </BoxTasksStyles>
                                        ))
                                    }
                                </div>
                            </BoxTasksStyles>
                            <BoxTasksStyles id='3' showHide={findTrue('3')}>
                                <TaskModelName state={showHide} setState={setShowHide} id="3" title="in progress" icon="down" length={inProgress && inProgress.length} />
                                <div>
                                    {
                                        inProgress && inProgress.map(({ id, name, pointEstimate, tags, owner, dueDate}: taskmodels) => (
                                            <BoxTasksStyles key={id} id='3' showHide={findTrue('3')}>
                                                <TaskModels
                                                    title={name} 
                                                    tasksTags={tags} 
                                                    pointEstimate={pointEstimate} 
                                                    image={owner && owner.avatar} 
                                                    name={owner && owner.fullName} 
                                                    tasksAssignName={owner && owner.fullName} 
                                                    dueDate={dueDate} 
                                                />
                                            </BoxTasksStyles>
                                        ))
                                    }
                                </div>
                            </BoxTasksStyles>
                            <BoxTasksStyles id='4' showHide={findTrue('4')}>
                                <TaskModelName state={showHide} setState={setShowHide} id="4" title="cancelled" icon="down" length={cancelled && cancelled.length} />
                                <div>
                                    {
                                        cancelled && cancelled.map(({ id, name, pointEstimate, tags, owner, dueDate}: taskmodels) => (
                                            <BoxTasksStyles key={id} id='4' showHide={findTrue('4')}>
                                                <TaskModels
                                                    title={name} 
                                                    tasksTags={tags} 
                                                    pointEstimate={pointEstimate} 
                                                    image={owner && owner.avatar} 
                                                    name={owner && owner.fullName} 
                                                    tasksAssignName={owner && owner.fullName} 
                                                    dueDate={dueDate} 
                                                />
                                            </BoxTasksStyles>
                                        ))
                                    }
                                </div>
                            </BoxTasksStyles>
                        </div>
            }
        </div>
    )
}

export default Tasks
