const mongojs = require('mongojs');
const db = mongojs('bubanj',['users']);

const viewController = (req,res) =>{
    db.users.find((err,users) =>{
        res.render('admin/edit-view',{users:users})
    })
}



module.exports = viewController;
