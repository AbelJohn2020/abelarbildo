import { useQuery } from '@apollo/client';
import React from 'react'
import { Task } from '../Cards/TypeCard';
import { TASKS } from '../queries/queries';
import { TaskModelName, TaskModels, TaskModelTitle } from '../TasksModels/TaskModels';

type taskmodels = {
    id: string,
    name: string, 
    pointEstimate: string, 
    tags: Array<string>, 
    owner: owner, 
    dueDate: string,
}

type owner = {
    avatar: string,
    createdAt: string,
    email: string,
    fullName: string,
    id: string,
    type: string,
    updatedAt: string,
    __typename: string,
}

const Tasks = () => {
    const { loading, error, data } = useQuery(TASKS);
    const { tasks } = (data !== undefined) && data;
    console.log(tasks);

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
            <div>
                <div>
                    <TaskModelName title="back log" icon="down" length={backlog && backlog.length} />
                    <div>
                        {
                            backlog && backlog.map(({  id, name, pointEstimate, tags, owner, dueDate }: taskmodels) => (
                                <TaskModels
                                    key={id}
                                    title={name}
                                    tasksTags={tags}
                                    pointEstimate={pointEstimate}
                                    image={owner && owner.avatar}
                                    name={owner && owner.fullName}
                                    tasksAssignName={owner && owner.fullName}
                                    dueDate={dueDate}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <TaskModelName title="todo" icon="down" length={todo && todo.length} />
                    <div>
                        {
                            todo && todo.map(({ id, name, pointEstimate, tags, owner, dueDate}: taskmodels) => (
                                <TaskModels
                                    key={id} 
                                    title={name} 
                                    tasksTags={tags} 
                                    pointEstimate={pointEstimate} 
                                    image={owner && owner.avatar} 
                                    name={owner && owner.fullName} 
                                    tasksAssignName={owner && owner.fullName} 
                                    dueDate={dueDate} 
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <TaskModelName title="in progress" icon="down" length={inProgress && inProgress.length} />
                    <div>
                        {
                            inProgress && inProgress.map(({ id, name, pointEstimate, tags, owner, dueDate}: taskmodels) => (
                                <TaskModels
                                    key={id} 
                                    title={name} 
                                    tasksTags={tags} 
                                    pointEstimate={pointEstimate} 
                                    image={owner && owner.avatar} 
                                    name={owner && owner.fullName} 
                                    tasksAssignName={owner && owner.fullName} 
                                    dueDate={dueDate} 
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <TaskModelName title="cancelled" icon="down" length={cancelled && cancelled.length} />
                    <div>
                        {
                            cancelled && cancelled.map(({ id, name, pointEstimate, tags, owner, dueDate}: taskmodels) => (
                                <TaskModels
                                    key={id} 
                                    title={name} 
                                    tasksTags={tags} 
                                    pointEstimate={pointEstimate} 
                                    image={owner && owner.avatar} 
                                    name={owner && owner.fullName} 
                                    tasksAssignName={owner && owner.fullName} 
                                    dueDate={dueDate} 
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks
