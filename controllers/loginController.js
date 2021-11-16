const mongojs = require('mongojs');
const db = mongojs('bubanj',['admins']);


const loginController = (req,res) =>{
let nameIzForme = req.body.name;
let passIzForme = req.body.password;

db.admins.find({firstName:nameIzForme, password:passIzForme}, (err,docs) =>{
    if(err){
        console.log('Greska');
        res.redirect('/');
    }else{
        if(docs.length === 1){
//Pronadjen korisnik
let user = docs[0];
if(user.role == "admin"){
    res.redirect("/admin")
}else{
    res.redirect('/');
}
        }else{
            res.redirect('/');
        }
    }
})
}

module.exports = loginController;