import AT from './types'

import stateData from '../data/initialState'

const API_URL = 'http://localhost:8000/'

var index = 0

export const fetchPrompt = () => (dispatch) => {
    dispatch({ type: AT.FETCH_PROMPT_REQUEST})
    //dispatch({ type: AT.FETCH_PROMPT_SUCCESS, prompt: stateData.prompts[++index%2] })
    return fetch(API_URL + 'subprompt')
        .then(response => response.json())
        .then(json => dispatch({ type: AT.FETCH_PROMPT_SUCCESS, prompt: json}))
        .catch(err => dispatch({ type: AT.FETCH_PROMPT_FAILURE, error: err}))
}

export const submitRhyme = (values) => (dispatch) => {
    dispatch({ type: AT.POST_RHYME_REQUEST})

    let formData = new FormData()
    for (var key in values) {
        formData.append(key, values[key])
    }
    return fetch(API_URL + 'analyse',
        {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(json => dispatch({ type: AT.POST_RHYME_SUCCESS, analysed: json}))
        .catch(err => dispatch({ type: AT.POST_RHYME_FAILURE, error: err}))
}

export const analysedFilter = (length) => (dispatch) => {
    dispatch({
        type: AT.ANALYSED_FILTER,
        count: length
    })
}

export const analysedTogether = (together) => (dispatch) => {
    dispatch({
        type: AT.ANALYSED_OPTIONS_ALL,
        together: together
    })
}

export const analysedColor = (color) => (dispatch) => {
    dispatch({
        type: AT.ANALYSED_OPTIONS_COLOR,
        color: color
    })
}