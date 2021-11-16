const mongojs = require('mongojs');
const db = mongojs('bubanj',['admins','users']);


const adminController = (req,res) =>{

db.users.find({},(err,users) =>{
    res.render('admin/adminDashboard',{
  users:users    })
})
}

module.exports = adminController;