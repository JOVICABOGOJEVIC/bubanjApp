const mongojs = require('mongojs');
const db = mongojs('bubanj',['users']);

const deleteController = (req,res) =>{
    let id = req.params.id;
    db.users.remove({'_id':db.ObjectId(id)},(err,users) =>{
        res.redirect('/admin');
    })
}

module.exports = deleteController;
