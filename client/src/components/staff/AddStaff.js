import React from 'react'
import {connect} from 'react-redux'

import StaffForm from './StaffForm'
import { startAddStaffs } from '../../actions/staffAction'

function AddStaff(props){  

    const  handleEditSubmit = (staff) => {    
        const redirect = () => props.history.push('/staffs')
        props.dispatch(startAddStaffs(staff,redirect))
    }
        return (
            <div>
                <StaffForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddStaff)