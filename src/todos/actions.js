// Redux action
export const CREATE_TODO = 'CREATE_TODO'
// Using action creative is better
export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo },
});

// redux action type
export const REMOVE_TODO = 'REMOVE_TODO'
// Action creative
export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: { todo },
})

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED'
export const markTodoAsCompleted = todo => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { todo },
})

export const LOAD_TODO_IN_PROGRESS = 'LOAD_TODO_IN_PROGRESS'
export const loadTodoInProgress = () => ({
    type: LOAD_TODO_IN_PROGRESS,
})

 export const LOAD_TODO_SUCCESS = 'LOAD_TODO_SUCCESS'
 export const loadTodoSuccess = todos => ({
    type: LOAD_TODO_SUCCESS,
    payload: { todos }
 })

 export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE'
 export const loadTodoFailure = () => ({
     type: LOAD_TODOS_FAILURE
 })
