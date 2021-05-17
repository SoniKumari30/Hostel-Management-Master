import axios from '../config/axios'
import swal from 'sweetalert'
export const AddRooms =(room)=>{
    return {type:'ADD_ROOMS',payload:room}
}
export const startAddRooms =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/users/rooms',formData,{headers:{'authorization':localStorage.getItem('authToken')}})
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
                    const room =response.data
                    redirect()
                    dispatch(AddRooms(room))
                }
            })
    }
}

export const setRooms = (room) => {
    return { type: 'SET_ROOMS', payload: room }
}

export const startSetRooms = () => {
        return (dispatch) => {
            axios.get('/users/rooms', { headers: {'authorization': localStorage.getItem('authToken')}})
            .then((response) => {
                const room = response.data
                dispatch(setRooms(room))
            })
        }
}

export const removeRoom = (room) => {
    return { type: 'REMOVE_ROOM', payload: room }
}

export const startRemoveRoom = (id) => {
    return (dispatch) => {
        axios.delete(`/users/rooms/${id}`, { headers: {'authorization': localStorage.getItem('authToken')}})
        .then((response) => {
            const room = response.data
            dispatch(removeRoom(room))
        })
    }
}

export const editRoom = (room) => {
    return { type: 'EDIT_ROOM', payload: room }
}

export const startEditRoom = (room, redirect) => {
    return (dispatch) => {
        axios.put(`/users/rooms/${room.id}`, room, {headers: {'authorization': localStorage.getItem('authToken')}})
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
                const room = response.data 
                dispatch(editRoom(room))
                redirect()
            }
        })
    }
}