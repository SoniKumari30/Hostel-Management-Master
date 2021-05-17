export const findRoom =(room,id)=>{
    return room.find(room=>room._id===id)
}