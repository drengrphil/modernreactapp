import { expect } from 'chai'
import { getCompletedTodos} from '../selectors'

describe('The getCompletedTodos Selector', () => {
    it ('Returns only completed todos', () => {
        const fakeTodos = [
        {
            text: 'Say Hello',
            isCompleted: true,
        },
        {
            text: 'Say Goodbyte',
            isCompleted: false
        },
        {
            text: 'Climb Mount Everest',
            isCompleted: false
        }]

        const expected = [{
            text: 'Say Hello',
            isCompleted: true
        }]

        const actual = getCompletedTodos.resultFunc(fakeTodos)

        // Compare results
        expect(actual).to.deep.equal(expected)
    })
})