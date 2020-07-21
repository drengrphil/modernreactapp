import { expect } from 'chai'
import 'node-fetch'
import fetchMock from 'fetch-mock'
import { loadTodos } from '../thunk'
import sinon from 'sinon'

describe('The loadTodos thunk', () =>{
    it('Dispatches the correct actions in the success scenario.', async () => {
        const fakeDispatch = sinon.spy()
        // Fake fetch return
        const fakeTodos = [{ text: '1'}, { text: '2'}]
        fetchMock.get('http://localhost:8080/todos', fakeTodos) // Sends back fekaToods instead actual todo
        
        const expectedFirstAction = { type: 'LOAD_TODO_IN_PROGRESS' }
        
        const expectedSecondAction = {
            type: 'LOAD_TODO_SUCCESS',
            payload: {
                todos: fakeTodos
            }
        }

        await loadTodos()(fakeDispatch)

        // Actual test
        // first arg passed to first call.
        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction)
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction)
        fetchMock.reset();
    })
})