import { useQuery } from '@apollo/client';
import React from 'react'
import { TASKS } from '../queries/queries';

const Tasks = () => {
    const { loading, error, data } = useQuery(TASKS);
    const { tasks } = (data !== undefined) && data;
    console.log(tasks);

    return (
        <div>
            tasks
            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>Error 404</p>
            }
        </div>
    )
}

export default Tasks
