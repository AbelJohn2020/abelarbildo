import { State } from "../Tasks/TasksType"

export type taskmodeltitle = {
    firstColumn: string,
    secondColumn: string,
    thirdColumn: string,
    fourthColumn: string,
    fifthColumn: string,

}

export type taskmodelname = {
    id: string,
    title: string,
    icon: string,
    length: string,
    state: State[],
    setState: React.Dispatch<React.SetStateAction<State[]>>,
}

export type taskmodels = {
    title: string,
    tasksTags: Array<string>,
    pointEstimate: string,
    image: string,
    name: string,
    tasksAssignName: string,
    dueDate: string,
}