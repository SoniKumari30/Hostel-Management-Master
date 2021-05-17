const studentInitialState=[]
const studentReducer =(state=studentInitialState,action)=>{
    switch(action.type){
        case 'SET_STUDENTS':{
            return [...action.payload]
        }
        case "ADD_STUDENTS": {
            return [...state, action.payload]
        }
        case 'EDIT_STUDENT': {
            return state.map(student => {
                if(student._id === action.payload._id){
                    return Object.assign({}, student, action.payload)
                }
                else{
                    return Object.assign({}, student)
                }
            })
        }
        case 'REMOVE_STUDENT': {
            return state.filter(student => {
                return student._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default studentReducer