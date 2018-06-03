import { createStore, combineReducers, applyMiddleware } from 'redux'
import { prompt, rhyme, analysed } from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import stateData from '../data/initialState'
import { reducer as formReducer } from 'redux-form'
import AT from '../actions/types'

const reducers = {
    prompt,
    rhyme,
    analysed,
    // Reset form after successful submission
    form: formReducer.plugin({
        rhyme: (state, action) => {
            switch(action.type) {
                case AT.POST_RHYME_SUCCESS:
                    return undefined
                default:
                    return state
            }
        }
    })
}

const storeFactory = (initialState={}) =>
    createStore(
        combineReducers(reducers),
        initialState,
        applyMiddleware(thunk, logger)
    )

export default storeFactory