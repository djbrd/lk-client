import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap'

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
                <Button type="submit" disabled={ pristine || submitting}>
                    Shoot
                </Button>
                <Button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </Button>
            </div>
        </form>
    )
}

RhymeForm = reduxForm({
    form: 'rhyme'
})(RhymeForm)

export default RhymeForm