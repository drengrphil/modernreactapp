import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import TodoListItem from './todolistitem'
import NewTodoForm from './newtodoform'
import {displayAlert} from './thunk'
import {
    getTodos, 
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos
} from './selectors'
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunk'
import styled from 'styled-components'

// Tagged function using backtick
const BigRedTest = styled.div`
    font-size: 48px;
    color: #FF0000;
`;

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ completedTodos, incompletedTodos, onRemovePressed , onCompletedPressed, onDisplayAlertClicked, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])
    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <ListWrapper>
        <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompletedTodos.map(
                todo => <TodoListItem 
                    todo={todo}
                    onRemovePressed={onRemovePressed} 
                    onCompletedPressed={onCompletedPressed}
                />)}
            <h3>Completed:</h3>
            {completedTodos.map(
                todo => <TodoListItem 
                    todo={todo}
                    onRemovePressed={onRemovePressed} 
                    onCompletedPressed={onCompletedPressed}
                />)}
        </ListWrapper>
    )
    return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompletedTodos: getIncompleteTodos(state)
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    onDisplayAlertClicked: () => dispatch(displayAlert())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)