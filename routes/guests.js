const express = require('express');
const router =express.Router();
const sq=require("../config/sequelize")
const Guest=require("../models/Guest")
const sequelize=require('sequelize')
const Op=sequelize.Op;

//index
router.get('/guests',function(req,res){
    res.render('index',{layout:'landing'});
})
//get
router.get('/',(req,res)=> Guest.findAll().then(guest => {
    res.render('guests',{
        guest
    });
})
.catch(err => console.log(err)));

// Display add gig form
router.get('/add', (req, res) => res.render('add'));

/* router.get('/add',function(req,res){
    res.render('add');
}); */

router.post('/add',(req,res)=>{
    let{designation,name,email,gender,event,number,allergy}=req.body;
    Guest.create({
        Designation:designation,
        Name: name,
         Email: email,
        Gender:gender,
        Event: event,
        Number: number,
        Allergy: allergy
    })
    .then(guests=>res.redirect('/guests'))
    .catch(err=>console.log(err))
});


 router.post('/checked',(req,res)=>{
    let {email}=req.body;
    console.log(email);
    Guest.update(
        { Checked:"checked" },
        { where: { Email:email} }
      )
    .then(function(rowsUpdated) {res.redirect("/guests")}
    )
   .catch(err=>console.log(err))
}); 

module.exports=router;



