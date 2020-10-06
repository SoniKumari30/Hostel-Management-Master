import React from 'react'
import {connect} from 'react-redux'

import RoomForm from './RoomForm'
import { startAddRooms } from '../../actions/roomAction'

function AddRoom(props){  

    const handleEditSubmit = (room) => {    
        const redirect = () => props.history.push('/rooms')
        props.dispatch(startAddRooms(room,redirect))
    }
        return (
            <div>
                <RoomForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddRoom)