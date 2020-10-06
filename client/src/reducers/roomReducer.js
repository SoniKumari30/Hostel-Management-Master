const roomInitialState=[]
const roomReducer =(state=roomInitialState,action)=>{
    switch(action.type){
        case 'SET_ROOMS':{
            return [...action.payload]
        }
        case "ADD_ROOMS": {
            return [...state, action.payload]
        }
        case 'EDIT_ROOM': {
            return state.map(room => {
                if(room._id === action.payload._id){
                    return Object.assign({}, room, action.payload)
                }
                else{
                    return Object.assign({}, room)
                }
            })
        }
        case 'REMOVE_ROOM': {
            return state.filter(room => {
                return room._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default roomReducer