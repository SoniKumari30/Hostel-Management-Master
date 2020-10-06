import React from 'react'
import { connect } from 'react-redux'
import StaffForm from './StaffForm'

import {startEditStaff} from '../../actions/staffAction'
import { findStaff } from '../../selectors/staffSelector'

function EditStaff(props){

    const handleEditSubmit = (staff) => {
        const redirect = () => {
            return props.history.push(`/staffs`)
        }
        props.dispatch(startEditStaff(staff, redirect))
    }
    return (
        <div>
            
            {props.staff && (
                <div>
                    {props.staff.name && <StaffForm staff = {props.staff} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        staff: findStaff(state.Staff,id)
    }
}
export default connect(mapStateToProps)(EditStaff)