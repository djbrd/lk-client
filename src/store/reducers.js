import AT from '../actions/types'
import {
    initialData,
    analysedScore,
    activeRhymes,
    maxRhymeLength } from "../lib/analysed"
//import stateData from '../data/initialState'

export const prompt = (state = { requested: false, error: '' }, action={ type: null }) => {
    switch (action.type) {
        case AT.FETCH_PROMPT_REQUEST:
            return {
                id: action.id,
                requested: true,
                error: ''
            }
        case AT.FETCH_PROMPT_SUCCESS:
            return {
                ...action.prompt,
                requested: false,
                error: ''
            }
        case AT.FETCH_PROMPT_FAILURE:
            return {
                error: action.error,
                requested: false
            }
        default:
            return state
    }
}


export const rhyme = (state = { startTime: 0, endTime: 0, editing: true, requested: false, error: ''}, action={ type: null }) => {
    switch (action.type) {
        case "@@redux-form/CHANGE":
            let startTime = state.startTime
            let endTime = state.endTime
            // Change time if this action is on the appropriate form
            // and timer is not yet started, or has finished (restart it)
            if (action.meta.form === 'rhyme' &&
                (startTime === 0 || endTime)) {
                startTime = Date.now()
                endTime = 0
            }
            return {
                ...state,
                startTime: startTime,
                endTime: endTime,
                editing: true
            }
        case AT.POST_RHYME_REQUEST:
            return {
                ...state,
                // Only set the end time if it hasn't been set
                endTime: state.endTime === 0 ? Date.now() : state.endTime,
                requested: true,
                editing: false,
                error: ''
            }
        case AT.POST_RHYME_SUCCESS:
            return {
                ...state,
                requested: false
            }
        case AT.POST_RHYME_FAILURE:
            return {
                requested: false,
                error: action.error
            }
        default:
            return state
    }
}


export const analysed = (state = {}, action={ type: null }) => {
    switch (action.type) {
        case AT.POST_RHYME_REQUEST:
            return {}
        case AT.POST_RHYME_SUCCESS: {
            let data = initialData(action.analysed)
            let score = analysedScore(data, action.prompt)
            let display = analysedDisplay({ data }, action)
            return {
                data,
                display,
                score,
                activeRhymes: activeRhymes(data, display)
            }
        }
        case AT.ANALYSED_FILTER:
        case AT.ANALYSED_OPTIONS_ALL:
        case AT.ANALYSED_OPTIONS_COLOR: {
            let display = analysedDisplay(state.display, action)
            return {
                ...state,
                display: display,
                activeRhymes: activeRhymes(state.data, display)
            }
        }
        default:
            return state
    }
}


export const analysedDisplay = (state = {}, action={ type: null}) => {
    switch (action.type) {
        case AT.POST_RHYME_SUCCESS:
            return {
                filter: analysedFilter(state, action),
                options: analysedOptions()
            }
        case AT.ANALYSED_FILTER:
            return {
                ...state,
                filter: analysedFilter(state.filter, action)
            }
        case AT.ANALYSED_OPTIONS_ALL:
        case AT.ANALYSED_OPTIONS_COLOR:
            return {
                ...state,
                options: analysedOptions(state.options, action)
            }
        default:
            return {
                options: analysedOptions(state.options, action),
                filter: analysedFilter(state.filter, action)
            }
    }
}

export const analysedFilter = (state = { pcount: 0, pmax: 0 }, action={ type: null }) => {
    switch (action.type) {
        case AT.POST_RHYME_SUCCESS:
            return {
                pcount: 0,
                pmax: maxRhymeLength(state)
            }
        case AT.ANALYSED_FILTER:
            return {
                ...state,
                pcount: action.count
            }
        default:
            return state
    }
}

export const analysedOptions = (state = { together: true, color: true }, action={ type: null }) => {
    switch (action.type) {
        case AT.ANALYSED_OPTIONS_ALL:
            return {
                ...state,
                together: action.together
            }
        case AT.ANALYSED_OPTIONS_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state
    }
}