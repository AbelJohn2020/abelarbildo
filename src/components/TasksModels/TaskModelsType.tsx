export type taskmodeltitle = {
    firstColumn: string,
    secondColumn: string,
    thirdColumn: string,
    fourthColumn: string,
    fifthColumn: string,

}

export type taskmodelname = {
    title: string,
    icon: string,
    length: string,
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