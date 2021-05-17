import React from 'react'
import { connect } from 'react-redux'
import { findStudent } from '../../selectors/studentSelector'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
function StudentShow(props){
    console.log(props)
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Student Show</h1>
            <h2 className='mt-3'><b>Student Name:-</b>{(props.student)?.name}</h2>
            <h2 className='mt-3'><b>Fathers Name:-</b>{(props.student)?.fathers_name} </h2>
            <h2 className='mt-3'><b>Address:-</b>{(props.student)?.address}</h2>
            <Link className='text-primary' to='/students'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        student:findStudent(state.student,id),
    }
}
export default connect(mapStateToProps)(StudentShow)