import React from 'react'
import { useQuery } from '@apollo/client';
import CardModel from '../CardModel/CardModel';
import { TASKS } from '../queries/queries';
import { card, Task } from './TypeCard';

const Cards = () => {
    const { loading, error, data } = useQuery(TASKS);
    const { tasks } = (data !== undefined) && data;
    
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
    
    const backlog = getBacklog();
    const inProgress = getInProgress();
    const todo = getTodo();

    console.log(backlog)
    console.log(inProgress)
    console.log(todo, 'todo')
    console.log(loading, 'load')

    return (
        <div>
            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>Error 404</p>
            }
            <div>
                <div>
                    <div>
                        {
                            loading === false && backlog.map(({ id, dueDate, name, owner, pointEstimate, tags }: card) => (
                               <div key={id}>
                                   <CardModel
                                        dueDate={dueDate} 
                                        name={name} 
                                        pointEstimate={pointEstimate} 
                                        tags={tags} 
                                        owner={owner}
                                    />
                               </div>
                           )) 
                        }
                    </div>
                </div>
                {/* <div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Cards
