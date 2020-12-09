import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveStaff } from '../../actions/staffAction'
import moment from 'moment'
import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 

function StaffList(props){

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
                props.dispatch(startRemoveStaff(id)) 
            } 
        })
        
    }
    return(
        <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9 )"}}>
            <Container>
                {/* <h1 className='pt-5 pb-2'>Staff - {props.staff.length} </h1> */}
                <Table striped bordered hover responsive style={{textAlign:'center'}}>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            props.staff.map((ele,i) => {
                                return (
                                    <tr key={i}>
                                        <td> {i+1} </td>
                                        <td> {ele.name} </td>
                                        <td> {ele.email} </td>
                                        <td> {ele.gender} </td>
                                        <td> {moment(ele.dob).format('L')} </td>
                                        <td><Link to={`/staffs/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                        <td><Link to={`/staffs/editstaff/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                        <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                    </tr>
                                )
                            })
                        } */}
                    </tbody>
                </Table>
                <Link className='text-primary' to="/staffs/add">Add Staff</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        staff:state.staff
    }
}
export default connect(mapStateToProps)(StaffList)