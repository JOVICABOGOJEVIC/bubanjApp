const mongojs = require('mongojs');
const db = mongojs('bubanj',['admins','users']);

const saveController = (req,res) =>{
    db.users.insert({
        fullName:req.body.fullName,
        address:req.body.address,
        phone:req.body.phone,
        description:req.body.description,
        date1:req.body.date1,
        date2:req.body.date2,
        clock:req.body.clock
    },(err,data)=>{
        res.redirect('/admin')
    })
}
    

module.exports = saveController;
