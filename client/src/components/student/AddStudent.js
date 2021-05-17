import React from 'react'
import {connect} from 'react-redux'

import StudentForm from './StudentForm'
import { startAddStudents } from '../../actions/studentAction'

function AddStudent(props){  

    const  handleEditSubmit = (student) => {    
        const redirect = () => props.history.push('/users/students')
        props.dispatch(startAddStudents(student,redirect))
    }
        return (
            <div>
                <StudentForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddStudent)