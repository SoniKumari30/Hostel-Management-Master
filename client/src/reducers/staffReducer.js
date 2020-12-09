const staffInitialState=[]
const staffReducer =(state=staffInitialState,action)=>{
    switch(action.type){
        case 'SET_STAFFS':{
            return [...action.payload]
        }
        case "ADD_STAFFS": {
            return [...state, action.payload]
        }
        case 'EDIT_STAFF': {
            return state.map(staff => {
                if(staff._id === action.payload._id){
                    return Object.assign({}, staff, action.payload)
                }
                else{
                    return Object.assign({}, staff)
                }
            })
        }
        case 'REMOVE_STAFF': {
            return state.filter(staff => {
                return staff._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default staffReducer