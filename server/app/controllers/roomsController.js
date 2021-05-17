const Room = require('../models/room')
const roomsCltr = { }

roomsCltr.list = (req, res) => {
    Room.find()
    .then((room) => {
        res.json(room)
    })
    .catch((err) => {
        res.json(err)
    })
}

roomsCltr.create =(req, res) => {  
    const body = req.body   
     const room = new Room(body) 
      room.save()      
        .then((room) => {        
                res.json(room)
                    })
            .catch((err) => {
               res.json(err)
                    })
            
}

roomsCltr.show = (req, res) => {
    const id = req.params.id 
    Room.findById(id)
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCltr.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Room.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })

}
roomsCltr.destroy = (req, res) => {
    const id = req.params.id 
    Room.findOneAndDelete({ _id: id, userId: req.userId })
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}


    

module.exports = roomsCltr