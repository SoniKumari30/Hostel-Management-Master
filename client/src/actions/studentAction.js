import axios from '../config/axios'
import swal from 'sweetalert'
export const AddStudents =(student)=>{
    return {type:'ADD_STUDENTS',payload:student}
}
export const startAddStudents =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/users/students',formData,{headers:{'authorization':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    swal({
                        icon:'info',
                        title:'Validation faled',
                        text: `${response.data.message}`,
                      });
                }
                else{
                    swal({
                        title: "Grate job!",
                        text: "added successfully",
                        icon: "success",
                      });
                    const student =response.data
                    redirect()
                    dispatch(AddStudents(student))
                }
            })
    }
}

export const setStudents = (student) => {
    return { type: 'SET_STUDENTS', payload: student }
}

export const startSetStudents = () => {
        return (dispatch) => {
            axios.get('/users/students', { headers: {'authorization': localStorage.getItem('authToken')}})
            .then((response) => {
                const student = response.data
                dispatch(setStudents(student))
            })
        }
}

export const removeStudent = (student) => {
    return { type: 'REMOVE_STUDENT', payload: student }
}

export const startRemoveStudent = (id) => {
    return (dispatch) => {
        axios.delete(`/users/students/${id}`, { headers: {'authorization': localStorage.getItem('authToken')}})
        .then((response) => {
            const student = response.data
            dispatch(removeStudent(student))
        })
    }
}

export const editStudent = (student) => {
    return { type: 'EDIT_STUDENT', payload: student }
}

export const startEditStudent = (student, redirect) => {
    return (dispatch) => {
        axios.put(`/users/students/${student.id}`, student, {headers: {'authorization': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                swal({
                    icon:'info',
                    title:'Validation faled',
                    text: `${response.data.message}`,
                  });
            }
            else{
                swal({
                    title: "Good job!",
                    text: "updated successfully",
                    icon: "success",
                  });
                const student = response.data 
                dispatch(editStudent(student))
                redirect()
            }
        })
    }
}