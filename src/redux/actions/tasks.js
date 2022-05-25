import { ADD__TASK, DRAG__AND__DROP, DELETE__TASK } from '../constant'

export const addNewTask = (task) => {
    return {
        type: ADD__TASK,
        payload: task,
    }
}

export const dragAndDrop = (task) => {
    return {
        type: DRAG__AND__DROP,
        payload: task,
    }
} 

export const deleteTask = ( idTask, idColumn )  => {
    return {
        type: DELETE__TASK,
        payload:{
            idColumn,
            idTask,
        }
    }
}