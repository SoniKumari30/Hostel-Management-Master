export const findStaff =(staff,id)=>{
    return staff.find(staff=>staff._id===id)
}