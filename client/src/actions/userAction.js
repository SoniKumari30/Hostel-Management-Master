import axios from '../config/axios'

export const setUser=(user)=>{
    return {type:'SET_USER',payload:user }
}

export const startLoginUser=(loginData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/login',loginData)
        .then((response)=>{
            // console.log(response.data)
            if(response.data.hasOwnProperty('error'))
            {
                alert(response.data.error)
            }
            else
            {
                alert('you have successfully logged in')
                localStorage.setItem('authToken',response.data.token)
                axios.get('/users/accounts',{headers:{'authorization':localStorage.getItem('authToken')}})
                .then((response)=>{
                    const user=response.data
                     console.log(user)  
                    dispatch(setUser(user))
                })
                redirect()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
} 

export const startGetUser=()=>{
    return (dispatch)=>{
       axios.get('/users/accounts',{headers:{'authorization':localStorage.getItem('authToken')}})
       .then((response=>{
           const user=response.data
           dispatch(setUser(user))
       })) 
       .catch((err)=>{
           alert(err)
       })
    }
}

export const startRegisterUser=(registerData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/register',registerData)
        .then(response=>{
            // console.log(response.data)
            if(response.data.hasOwnProperty('errors'))
            {
                alert(response.data.message)
            } 
            else
            {
                alert('you have successfully registered')
                // props.history.push('/users/login')
                redirect()
            }
        })
        .catch(err=>{
            console.log(err)
        })
        // console.log('action generator',formData)
    }
}

export const startUserLogout=()=>{
    return (dispatch)=>{
        localStorage.removeItem('authToken')
        dispatch(setUser({}))
        window.location.href='/'
    }
    
}
