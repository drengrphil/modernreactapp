// named .test.js so that mocha can find it.
import { expect } from 'chai'
import { todos } from '../reducers'

describe('The todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action is received', () => {
        // Fake current state and fake action
        const fakeTodo = { test: 'hello Faker', isCompleted: false }
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo
            }
        }
        const originalState = { isLoading: false, data: []}
        // Expected result of the test
        const expected = {
            isLoading: false,
            data: [fakeTodo]
        }

        // Actual result from reducer
        const actual = todos(originalState, fakeAction)
        
        // Compare actual and expected result
        expect(actual).to.deep.equal(expected)
    })
})