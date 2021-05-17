import React from 'react'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/static/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { startUserLogout } from './actions/userAction'

import AddStudent from './components/student/AddStudent'
import EditStudent from './components/student/EditStudent'
import StudentList from './components/student/StudentList'
import StudentShow from './components/student/StudentShow'

import AddStaff from './components/staff/AddStaff'
import EditStaff from './components/staff/EditStaff'
import StaffList from './components/staff/StaffList'
import StaffShow from './components/staff/StaffShow'

import AddRoom from './components/room/AddRoom'
import EditRoom from './components/room/EditRoom'
import RoomList from './components/room/RoomList'
import RoomShow from './components/room/RoomShow'


import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap'
import swal from 'sweetalert'
function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Navbar color="dark" light expand="md" className="mb-2" >
                    <NavbarBrand href={"/"} style={{color:'white'}}>HOSTEL-MANAGEMENT-SYSTEM</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <Link className="nav-link text-light" to="/" style={{ color: '#FFF' }}>Home</Link>
                        </NavItem>
                        {Object.keys(props.user).length !== 0 &&
                            <React.Fragment>
                                <NavItem>
                                    <Link className="nav-link text-light" to="/students">Student</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link text-light" to="/staffs">Staff</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link text-light" to="/rooms">Room</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link text-light" to="/reviews">Review</Link>
                                </NavItem>
                            </React.Fragment>
                        }
                        {Object.keys(props.user).length === 0 ? (
                            <React.Fragment>
                                <NavItem>
                                    <Link className="nav-link text-light" to="/users/login" style={{color:'white'}}>Login</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link text-light" to="/users/register">Register</Link>
                                </NavItem>
                            </React.Fragment>
                        ):(
                            <NavItem>
                            <Link className="nav-link text-primary" to="/" onClick={()=>{
                              swal({
                                title: "Are you sure you want to log out?",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                              })
                              .then((willDelete) => {
                                if (willDelete) {
                                  swal("Successfully Logged out", {
                                    icon: "success",
                                  });
                                  props.dispatch(startUserLogout())
                                } 
                              })
                              }}>Logout</Link>
                            </NavItem>
                          )}
                          
                        </Nav>
                      </Navbar>
                      
                        
                    
                <div className="ml-auto">
                    <Switch>
                        <Route path='/' component={Home} exact={true}/>
                        <Route path='/users/login' component={Login}/>
                        <Route path='/users/register' component={Register}/>

                        <Route path="/students/add" component={AddStudent} />
                        <Route path="/students/editstudent/:id" component={EditStudent} />
                        <Route path="/students" component={StudentList} exact={true} />
                        <Route path="/students/:id" component={StudentShow} exact={true} />
                       
                        <Route path="/Staffs/add" component={AddStaff} />
                        <Route path="/staffs/editstaff/:id" component={EditStaff} />
                        <Route path="/staffs" component={StaffList} exact={true} />
                        <Route path="/staffs/:id" component={StaffShow} exact={true} />
                        
                        <Route path="/rooms/add" component={AddRoom} />
                        <Route path="/rooms/editroom/:id" component={EditRoom} />
                        <Route path="/rooms" component={RoomList} exact={true} />
                        <Route path="/rooms/:id" component={RoomShow} exact={true} />
                       

                        
                      
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(App)