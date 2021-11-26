export type Task = {
    createdAt: Date,
    dueDate: Date,
    id: string,
    name: string,
    owner: User,
    pointEstimate: PointEstimate,
    position: number,
    status: Status,
    tags: TaskTag[],
}

export type cardmodel = {
    dueDate: Date,
    name: string,
    owner: User,
    pointEstimate: PointEstimate,
    tags: TaskTag[],
}

export type card = {
    id: string,
    dueDate: Date,
    name: string,
    owner: User,
    pointEstimate: PointEstimate,
    tags: TaskTag[],
}

enum TaskTag {
    ANDROID,
    IOS,
    NODE_JS,
    RAILS,
    REACT,
}

enum PointEstimate {
    EIGHT,
    FOUR,
    ONE,
    TWO,
    ZERO,
}

enum Status {
    BACKLOG,
    CANCELLED,
    DONE,
    IN_PROGRESS,
    TODO,
  }

type User = {
    avatar: string,
    createdAt: string,
    email: string,
    fullName: string,
    id: string,
    type: string,
    updatedAt: Date,
}