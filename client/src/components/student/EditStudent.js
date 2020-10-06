import React from 'react'
import { connect } from 'react-redux'
import StudentForm from './StudentForm'

import {startEditStudent} from '../../actions/studentAction'
import { findStudent } from '../../selectors/studentSelector'

function EditStudent(props){

    const handleEditSubmit = (student) => {
        const redirect = () => {
            return props.history.push(`/users/students`)
        }
        props.dispatch(startEditStudent(student, redirect))
    }
    return (
        <div>
            
            {props.student && (
                <div>
                    {props.student.name && <StudentForm student = {props.student} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        student: findStudent(state.student,id)
    }
}
export default connect(mapStateToProps)(EditStudent)