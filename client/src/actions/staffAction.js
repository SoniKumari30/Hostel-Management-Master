import axios from '../config/axios'
import swal from 'sweetalert'
export const AddStaffs =(staff)=>{
    return {type:'ADD_STAFFS',payload:staff}
}
export const startAddStaffs =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/users/staffs',formData,{headers:{'authorization':localStorage.getItem('authToken')}})
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
                        title: "Good job!",
                        text: "added successfully",
                        icon: "success",
                      });
                    const staff =response.data
                    redirect()
                    dispatch(AddStaffs(staff))
                }
            })
    }
}

export const setStaffs = (staff) => {
    return { type: 'SET_STAFFS', payload: staff }
}

export const startSetStaffs = () => {
        return (dispatch) => {
            axios.get('/users/staffs', { headers: {'authorization': localStorage.getItem('authToken')}})
            .then((response) => {
                const staff = response.data
                dispatch(setStaffs(staff))
            })
        }
}

export const removeStaff = (staff) => {
    return { type: 'REMOVE_STAFF', payload: staff }
}

export const startRemoveStaff = (id) => {
    return (dispatch) => {
        axios.delete(`/users/staffs/${id}`, { headers: {'authorization': localStorage.getItem('authToken')}})
        .then((response) => {
            const staff = response.data
            dispatch(removeStaff(staff))
        })
    }
}

export const editStaff = (staff) => {
    return { type: 'EDIT_STAFF', payload: staff }
}

export const startEditStaff = (staff, redirect) => {
    return (dispatch) => {
        axios.put(`/users/staffs/${staff.id}`, staff, {headers: {'authorization': localStorage.getItem('authToken')}})
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
                    title: "Grate job!",
                    text: "updated successfully",
                    icon: "success",
                  });
                const staff = response.data 
                dispatch(editStaff(staff))
                redirect()
            }
        })
    }
}