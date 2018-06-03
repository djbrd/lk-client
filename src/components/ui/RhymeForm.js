import React from 'react'
import { Field, reduxForm } from 'redux-form'

const formStyle = {
    width: '100%'
}

const textAreaStyle = {
    height: '16rem',
    maxWidth: '640px',
    width: '100%'
}

let RhymeForm = ({ handleSubmit, pristine, reset, submitting }) => {
    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div>
               <Field name="rhyme"
                      component="textarea"
                      type="textarea"
                      placeholder='Your rhyme here'
                      maxLength={280}
                      style={textAreaStyle}
               />
            </div>
            <div>
                <button type="submit" disabled={ pristine || submitting}>
                    Shoot
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

RhymeForm = reduxForm({
    form: 'rhyme'
})(RhymeForm)

export default RhymeForm