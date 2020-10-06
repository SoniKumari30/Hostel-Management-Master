const teacherInitialState=[]
const teacherReducer =(state=teacherInitialState,action)=>{
    switch(action.type){
        case 'SET_TEACHERS':{
            return [...action.payload]
        }
        case "ADD_TEACHERS": {
            return [...state, action.payload]
        }
        case 'EDIT_TEACHER': {
            return state.map(teacher => {
                if(teacher._id === action.payload._id){
                    return Object.assign({}, teacher, action.payload)
                }
                else{
                    return Object.assign({}, teacher)
                }
            })
        }
        case 'REMOVE_TEACHER': {
            return state.filter(teacher => {
                return teacher._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default teacherReducer