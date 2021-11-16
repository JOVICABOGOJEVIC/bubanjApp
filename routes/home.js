const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/add',(req,res)=>{
    res.render('admin/add-view');
})


module.exports = router;