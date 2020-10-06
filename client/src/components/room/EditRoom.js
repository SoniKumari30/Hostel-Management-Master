import React from 'react'
import { connect } from 'react-redux'
import RoomForm from './RoomForm'

import {startEditRoom} from '../../actions/roomAction'
import { findRoom } from '../../selectors/roomSelector'

function EditRoom(props){

    const handleEditSubmit = (room) => {
        const redirect = () => {
            return props.history.push(`/rooms`)
        }
        props.dispatch(startEditRoom(room, redirect))
    }
    return (
        <div>
            
            {props.room && (
                <div>
                    {props.room.room && <RoomForm room = {props.room} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        room: findRoom(state.room,id)
    }
}
export default connect(mapStateToProps)(EditRoom)