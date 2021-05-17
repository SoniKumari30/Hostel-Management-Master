import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { findRoom } from '../../selectors/roomSelector'


function RoomShow(props){
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Room Show</h1>
            <h2 className='mt-3'><b>Room No.:-</b>{(props.room)?.room} </h2><br/>
            <Link className='text-primary' to='/rooms'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        room:findRoom(state.room,id)
    }
}
export default connect(mapStateToProps)(RoomShow)