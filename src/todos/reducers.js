import {
    CREATE_TODO, 
    REMOVE_TODO, 
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_FAILURE,
    LOAD_TODO_SUCCESS,
    LOAD_TODO_IN_PROGRESS
} from './actions'

const initialState = { isLoading: false, data: [] }

// Function to manage action
export const todos = (state = initialState, action) => {
    // Reducer is called when action is fired in the app
    const {type, payload} = action;
    switch(type){
        case CREATE_TODO: {
            const { todo } = payload
            return {
                ...state,
                data: state.data.concat(todo)
            }
        }
        case REMOVE_TODO: {
            // Get text from payload
            const { todo: todoToRemove } = payload // todoToRemove is nickname for todo
            return{
                ...state,
                data: state.data.filter(todo => todo.id !== todoToRemove.id)
            }
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo: updatedTodo } = payload
            return{
                ...state,
                data: state.data.map(todo => {
                if (todo.id === updatedTodo.id){
                    return updatedTodo
                }
                return todo
                })
            }
        }
        case LOAD_TODO_SUCCESS: {
            const { todos } = payload // Get todos from payload
            return{
                ...state,
                isLoading: false,
                data: todos
            }
        }
        case LOAD_TODO_IN_PROGRESS:
            return {
                ...state,
                isLoading: true
            }
        case LOAD_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            // Unchaged state
            return state
    }
}