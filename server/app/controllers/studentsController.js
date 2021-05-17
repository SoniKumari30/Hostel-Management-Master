const Student = require('../models/student')
const studentsCltr = { }

studentsCltr.list = (req, res) => {
    Student.find()
    .then((student) => {
        res.json(student)
    })
    .catch((err) => {
        res.json(err)
    })
}

studentsCltr.create =(req, res) => {  
    const body = req.body   
     const student = new Student(body) 
      Student.save()      
        .then((student) => {        
                res.json(student)
                    })
            .catch((err) => {
               res.json(err)
                    })
            
}

studentsCltr.show = (req, res) => {
    const id = req.params.id 
    Student.findById(id)
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}

studentsCltr.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Student.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })

}
studentsCltr.destroy = (req, res) => {
    const id = req.params.id 
    Student.findOneAndDelete({ _id: id, userId: req.userId })
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}


    

module.exports = studentsCltr