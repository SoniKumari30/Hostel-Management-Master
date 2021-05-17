const Staff = require('../models/staff')
const staffsCltr = { }

staffsCltr.list = (req, res) => {
    Staff.find()
    .then((staff) => {
        res.json(staff)
    })
    .catch((err) => {
        res.json(err)
    })
}

staffsCltr.create =(req, res) => {  
    const body = req.body   
     const staff = new Staff(body) 
      Staff.save()      
        .then((staff) => {        
                res.json(staff)
                    })
            .catch((err) => {
               res.json(err)
                    })
            
}

staffsCltr.show = (req, res) => {
    const id = req.params.id 
    Staff.findById(id)
        .then((staff) => {
            res.json(staff)
        })
        .catch((err) => {
            res.json(err)
        })
}

staffsCltr.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Staff.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((staff) => {
            res.json(staff)
        })
        .catch((err) => {
            res.json(err)
        })

}
staffsCltr.destroy = (req, res) => {
    const id = req.params.id 
    Staff.findOneAndDelete({ _id: id, userId: req.userId })
        .then((staff) => {
            res.json(staff)
        })
        .catch((err) => {
            res.json(err)
        })
}


    

module.exports = staffsCltr