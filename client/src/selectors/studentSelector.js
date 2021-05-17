export const findStudent =(student,id)=>{
    return student.find(student=>student._id===id)
}