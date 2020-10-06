import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'
import axios from '../../config/axios'

class StaffForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.staff ? props.staff.name:'',
            gender:props.staff ? props.staff.gender:'',
            dob:props.staff ? props.staff.dob:'',
            occupation:props.staff ? props.occupation.occupation:'',
            email:props.staff ? props.staff.email:'',
            mobile:props.staff ? props.staff.mobile:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name:this.state.name,
            gender:this.state.gender,
            dob:this.state.dob,
            occupation:this.state.occupation,
            email:this.state.email,
            mobile:this.state.mobile,
        }
        this.props.staff && (formData.id = this.props.staff._id)
        this.props.handleEditSubmit(formData)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeName=(e)=>{
        const name=e.target.value
        this.setState({
            name
        })
    }

    handleChangeEmail=(e)=>{
        axios.get('https://api.genderize.io/?name='+this.state.name)
        .then(response=>{
            const user=response.data
            this.setState({gender:user.gender})
        })
    }

    handleRadioChange=(gender)=>{
        this.setState({gender})
    }

    render(){
        return(
            <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Staff</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="container form-group">
                            <Form.Label htmlFor="name">Name:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="name"
                                name="name"
                                onBlur={this.handleChangeName}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="email">Email:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onFocus={this.handleChangeEmail}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label>Gender:-</Form.Label>
                            <Form.Check inline label='Male'
                                type="radio"
                                id="male"
                                name="gender"
                                checked={this.state.gender==='male'}
                                onChange={()=>{this.handleRadioChange('male')}}
                            />
                            <Form.Check inline label='Female'
                                type="radio"
                                id="female"
                                name="gender"
                                checked={this.state.gender==='female'}
                                onChange={()=>{this.handleRadioChange('female')}}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="dob">DOB:-</Form.Label>
                            <Form.Control
                                type="date"
                                id="dob"
                                name="dob"
                                value={this.state.dob}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="occupation">occupation:-</Form.Label>
                            <Form.Control
                                type="text"
                                id="qualification"
                                name="qualification"
                                value={this.state.occupation}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="mobile">Mobile:-</Form.Label>
                            <Form.Control
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={this.state.mobile}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <input type="submit" value="Submit" className='btn btn-secondary'/>
                        </div>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default connect()(StaffForm)