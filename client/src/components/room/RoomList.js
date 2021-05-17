import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveRoom} from '../../actions/roomAction'

import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 

function RoomList(props){

    const handleRemove = (id) => {
        swal({
            title: "Are you sure you want to delete ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Successfully Deleted", {	
                    icon: "success",
                });
                props.dispatch(startRemoveRoom(id)) 
            } 
        })
    }
    return(
        <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
            <Container>
                {/* <h1 className='pt-5 pb-2'>Room - {props.room.length} </h1> */}
                <Table striped bordered hover responsive>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>Room No.</th>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            props.room.map((ele,i) => {
                                return (
                                    <tr key={ele._id}>
                                        <td> {i+1} </td>
                                         <td> {ele.room} </td>
                                        <td><Link to={`/rooms/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                        <td><Link to={`/rooms/editroom/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                        <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                    </tr>
                                )
                            })
                        } */}
                    </tbody>
                </Table>
                <Link className='text-primary' to="/rooms/add">Add Room</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        room:state.room
    }
}
export default connect(mapStateToProps)(RoomList)