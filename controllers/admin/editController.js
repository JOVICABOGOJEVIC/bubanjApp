const mongojs = require('mongojs');
const db = mongojs('bubanj',['users']);

const editController = (req,res) =>{
let id = req.params.id;
db.users.findOne({"_id":db.ObjectId(id)},(err,users) =>{
    res.render('admin/editForm-view',{users:users})
})
}



module.exports = editController;
