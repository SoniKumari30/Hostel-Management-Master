import React from 'react'
import { connect } from 'react-redux'
import { findStaff } from '../../selectors/staffSelector'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
function StaffShow(props){
    console.log(props)
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Staff Show</h1>
            <h2 className='mt-3'><b>Staff Name:-</b>{(props.staff)?.name} </h2>
            <h2 className='mt-3'><b>Occupation:-</b>{(props.satff)?.occupation} </h2>
            <Link className='text-primary' to='/staffs'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        staff:findStaff(state.staff,id)
    }
}
export default connect(mapStateToProps)(StaffShow)