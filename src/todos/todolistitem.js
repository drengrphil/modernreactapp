import React from 'react'
import  styled from 'styled-components'

// 864000 is one day in millisecond
// * 5 means more than 5 days old
const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForDate = (startingDate, currentDate) =>
    (startingDate > new Date(currentDate - 86400000 * 5)
        ? 'none'
        : '2px solid red')

// Extends TodoItemContainer
const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${props => getBorderStyleForDate(new Date(props.createdAT), Date.now())};
`

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const ButtonStyle = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompletedButton = styled(ButtonStyle)`
    background-color: #22ee22;
`;

const RemovedButton = styled(ButtonStyle)`
    background-color: #ee2222;
    margin-left: 8px;
`;

const TodoListItem = ({todo, onRemovePressed, onCompletedPressed}) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning
    return (
        <Container createAt={todo.createdAt}>
            {todo != null 
                ? <h3>{todo.text}</h3>
                : console.log("Null from reudx")
            }
            <p>
                Created at: &nbsp;
                {(new Date(todo.createdAt)).toLocaleDateString()}
            </p>

            {todo != null 
                ? <ButtonsContainer>
                    {todo.isCompleted
                        ? null
                        : <CompletedButton
                            onClick={() => onCompletedPressed(todo.id)}
                            className="completed-button">Mark As Completed</CompletedButton>}
                        <RemovedButton
                            onClick={()=> onRemovePressed(todo.id)}
                            className="remove-button">Remove</RemovedButton>
                </ButtonsContainer> 
                    : console.log("Null todo from redux")}
        </Container>
    )
}

export default TodoListItem