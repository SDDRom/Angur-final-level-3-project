import { TaskDifficulty, TaskLevel, TaskStatus } from "../constants/constants.enum";

export interface ITask {
    taskName: string;
    description: string;
    startDate: Date | string;
    dueDate: Date | string;
    status: string;
    difficulty: string;
    level: string;
    userId: string;
    image?: string;
    resources?: object | [],
    id?: number;
}