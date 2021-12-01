export type taskmodels = {
    id: string,
    name: string, 
    status: string,
    pointEstimate: string, 
    tags: Array<string>, 
    owner: owner, 
    dueDate: string,
};

export type State = {
    id: string,
    show: boolean,
    name: string,
};

type owner = {
    avatar: string,
    createdAt: string,
    email: string,
    fullName: string,
    id: string,
    type: string,
    updatedAt: string,
    __typename: string,
};